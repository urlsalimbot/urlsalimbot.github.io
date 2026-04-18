/**
 * JavaScript Portfolio - Interactive Features
 * Author: Earl Salimbot
 * Description: Adds interactivity to the portfolio website including
 *              text manipulation, color changers, dark mode, and more.
 */

// ========================================
// 1. TEXT MANIPULATION
// ========================================

// Array of titles for the typing effect
const titleTexts = [
  "Earl Salimbot",
  "Welcome to My Portfolio",
  "Game Developer",
  "Creative Designer",
  "3D Artist",
];
let currentTitleIndex = 0;

/**
 * Changes the header title text with cycling titles
 */
function changeTitle() {
  const header = document.getElementById("header");
  if (!header) return;

  // Get the text node (first child before the cursor div)
  const textNode = header.childNodes[0];
  if (!textNode) return;

  currentTitleIndex = (currentTitleIndex + 1) % titleTexts.length;
  textNode.textContent = " " + titleTexts[currentTitleIndex] + " ";
}

// ========================================
// 2. THEME SYSTEM (REPLACES BG + TEXT COLOR)
// ========================================
const themes = [
  {
    name: "Dark Default",
    "--bg-primary": "#050505",
    "--bg-secondary": "#0a0a0a",
    "--bg-tertiary": "#0f0f0f",
    "--bg-card": "#0d0d0d",
    "--text-primary": "#ffffff",
    "--text-secondary": "#c9c9c9",
  },
  {
    name: "Navy Blue",
    "--bg-primary": "#0a192f",
    "--bg-secondary": "#112240",
    "--bg-tertiary": "#1b2a4a",
    "--bg-card": "#16213e",
    "--text-primary": "#e6f1ff",
    "--text-secondary": "#a8b2d1",
  },
  {
    name: "Purple",
    "--bg-primary": "#1a0a2e",
    "--bg-secondary": "#2a0f4a",
    "--bg-tertiary": "#3a1664",
    "--bg-card": "#2e1a47",
    "--text-primary": "#f3e8ff",
    "--text-secondary": "#d6bcfa",
  },
  {
    name: "Light Mode",
    "--bg-primary": "#ffffff",
    "--bg-secondary": "#f5f5f5",
    "--bg-tertiary": "#e8e8e8",
    "--bg-card": "#fafafa",
    "--text-primary": "#1a1a1a",
    "--text-secondary": "#333333",
  },
];

let currentThemeIndex = 0;

/**
 * Applies a theme
 */
function applyTheme(index) {
  const theme = themes[index];

  Object.keys(theme).forEach((key) => {
    if (key.startsWith("--")) {
      document.body.style.setProperty(key, theme[key]);
    }
  });

  document.body.style.backgroundColor = theme["--bg-primary"];
  document.body.style.color = theme["--text-secondary"];

  showNotification(`${theme.name} applied!`);
}

/**
 * Cycles through themes
 */
function cycleTheme() {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  applyTheme(currentThemeIndex);
}

// ========================================
// 4. DARK MODE TOGGLE
// ========================================

let isDarkMode = true; // Starts in dark mode by default

/**
 * Toggles between light mode and dark mode
 */
function toggleDarkMode() {
  const darkIndex = 0;
  const lightIndex = themes.findIndex((t) => t.name === "Light Mode");

  currentThemeIndex = currentThemeIndex === lightIndex ? darkIndex : lightIndex;

  applyTheme(currentThemeIndex);
}

// ========================================
// 5. CLICK INTERACTION
// ========================================

let clickCount = 0;
const clickMessages = [
  "You clicked the button!",
  "Nice click! Keep going!",
  "Wow, you're really committed to this!",
  "That's a lot of clicks!",
  "You're unstoppable!",
  "Click master!",
  "Legendary click count!",
];

/**
 * Displays a message and tracks click count
 */
function handleClickInteraction() {
  clickCount++;
  const messageElement = document.getElementById("click-message");
  const countElement = document.getElementById("click-count");

  if (messageElement) {
    const messageIndex = Math.min(
      Math.floor((clickCount - 1) / 1),
      clickMessages.length - 1,
    );
    messageElement.textContent = clickMessages[messageIndex];
    messageElement.style.opacity = "1";
  }

  if (countElement) {
    countElement.textContent = clickCount;
  }

  // Show notification
  showNotification(`Click #${clickCount}!`);
}

// ========================================
// 6. UNDO / RESET BUTTON
// ========================================

/**
 * Resets ALL changes back to original state
 */
function resetAll() {
  // Reset background
  document.body.style.backgroundColor = "";
  document.body.style.backgroundImage = "";
  document.body.style.color = "";

  // Reset CSS variables to defaults
  document.body.style.removeProperty("--bg-primary");
  document.body.style.removeProperty("--bg-secondary");
  document.body.style.removeProperty("--bg-tertiary");
  document.body.style.removeProperty("--bg-card");
  document.body.style.removeProperty("--text-primary");
  document.body.style.removeProperty("--text-secondary");
  document.body.style.removeProperty("--text-muted");

  // Remove light mode class
  document.body.classList.remove("light-mode");
  isDarkMode = true;

  // Reset counters
  currentBgIndex = 0;
  currentTextColorIndex = 0;
  clickCount = 0;
  currentTitleIndex = 0;

  // Reset header text
  const header = document.getElementById("header");
  if (header && header.childNodes[0]) {
    header.childNodes[0].textContent = " Earl Salimbot ";
  }

  // Reset click message
  const messageElement = document.getElementById("click-message");
  if (messageElement) {
    messageElement.textContent = "";
    messageElement.style.opacity = "0";
  }

  const countElement = document.getElementById("click-count");
  if (countElement) {
    countElement.textContent = "0";
  }

  // Reset font size
  document.documentElement.style.fontSize = "";
  document.body.style.fontSize = "";

  // Reset all text element styles
  const textElements = document.querySelectorAll(
    "h1, h2, h3, h4, h5, h6, p, span, a, li, label, button, input, textarea, select, option, strong, em, small, blockquote, cite, code, pre, td, th, caption, figcaption, legend, dt, dd, abbr, address, b, i, u, mark, sub, sup, time, var, q, samp, kbd, del, ins",
  );

  textElements.forEach((el) => {
    el.style.color = "";
    el.style.fontSize = "";
  });

  const additionalSelectors = document.querySelectorAll(
    "nav a, footer a, .highlight-card, .featured-item, .project-content, .cta-btn, .btn, .project, article, section",
  );

  additionalSelectors.forEach((el) => {
    el.style.color = "";
    el.style.fontSize = "";
  });

  // Show/hide sections - show all hidden sections
  const sections = document.querySelectorAll("section, .project, article");
  sections.forEach((section) => {
    section.style.display = "";
  });

  // Stop typing effects
  stopTypingEffect();
  stopTitleTypingEffect();

  // Subtitle typing reset
  currentTypingIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;

  // Header typing reset
  currentTitleCharIndex = 0;

  // Reset subtitle text
  const subtitle = document.getElementById("typing-subtitle");
  if (subtitle) {
    subtitle.textContent = "";
  }

  // Reset header text
  if (header && header.childNodes[0]) {
    header.childNodes[0].textContent = " Earl Salimbot ";
  }

  // Clear notification
  hideNotification();

  showNotification("All changes reset to default!");
}

function stopTypingEffect() {
  if (typingInterval) {
    clearTimeout(typingInterval);
    typingInterval = null;
  }
}

// ========================================
// BONUS FEATURE 1: SHOW/HIDE SECTION
// ========================================

/**
 * Toggles visibility of a specific section
 * @param {string} sectionId - The ID of the section to toggle
 */
function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    if (section.style.display === "none") {
      section.style.display = "";
      showNotification("Section shown!");
    } else {
      section.style.display = "none";
      showNotification("Section hidden!");
    }
  }
}

// ========================================
// BONUS FEATURE 2: TYPING EFFECT
// ========================================

const typingTexts = [
  "Game Developer",
  "Game Designer",
  "3D Artist",
  "Creative Thinker",
  "Problem Solver",
];
let currentTypingIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingInterval;

/**
 * Creates a typing effect in the subtitle
 */
function typeEffect() {
  const subtitle = document.getElementById("typing-subtitle");
  if (!subtitle) return;

  const currentText = typingTexts[currentTypingIndex];

  if (isDeleting) {
    subtitle.textContent = currentText.substring(0, currentCharIndex - 1);
    currentCharIndex--;
  } else {
    subtitle.textContent = currentText.substring(0, currentCharIndex + 1);
    currentCharIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && currentCharIndex === currentText.length) {
    typeSpeed = 2000; // Pause at end
    isDeleting = true;
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentTypingIndex = (currentTypingIndex + 1) % typingTexts.length;
    typeSpeed = 500; // Pause before next word
  }

  typingInterval = setTimeout(typeEffect, typeSpeed);
}

// ========================================
// BONUS FEATURE 2.5: HEADER TITLE TYPING EFFECT
// ========================================

let currentTitleCharIndex = 0;
let titleTypingInterval;
let runTitleTypingOnce = false;

/**
 * Creates a typing effect for the header title
 */
function titleTypeEffect() {
  const header = document.getElementById("header");
  if (!header) return;

  const textNode = header.childNodes[0];
  if (!textNode) return;

  const currentText = titleTexts[currentTitleIndex];

  // Type forward only
  textNode.textContent =
    " " + currentText.substring(0, currentTitleCharIndex + 1) + " ";

  currentTitleCharIndex++;

  // Stop when fully typed
  if (currentTitleCharIndex >= currentText.length) {
    stopTitleTypingEffect();
    return;
  }

  titleTypingInterval = setTimeout(titleTypeEffect, 80);
}

/**
 * Starts the typing effect for the header title
 */
function startTitleTypingEffect() {
  if (titleTypingInterval) {
    clearTimeout(titleTypingInterval);
  }
  currentTitleCharIndex = 0;
  titleTypeEffect();
}

/**
 * Stops the typing effect for the header title
 */
function stopTitleTypingEffect() {
  if (titleTypingInterval) {
    clearTimeout(titleTypingInterval);
    titleTypingInterval = null;
  }
}

// ========================================
// BONUS FEATURE 3: FONT SIZE CHANGER
// ========================================

let currentFontSize = 16; // Default font size in px

/**
 * Changes the base font size of ALL text on the page
 * @param {number} change - Positive to increase, negative to decrease
 */
function changeFontSize(change) {
  currentFontSize += change;
  // Clamp between 10px and 32px
  currentFontSize = Math.max(10, Math.min(32, currentFontSize));

  // Set base font size on root element
  document.documentElement.style.fontSize = currentFontSize + "px";

  // Target all text elements explicitly for comprehensive coverage
  const textElements = document.querySelectorAll(
    "h1, h2, h3, h4, h5, h6, p, span, a, li, label, button, input, textarea, select, option, strong, em, small, blockquote, cite, code, pre, td, th, caption, figcaption, legend, dt, dd, abbr, address, b, i, u, mark, sub, sup, time, var, q, samp, kbd, del, ins",
  );

  // Calculate relative sizes for different element types
  const baseSize = currentFontSize;
  const sizeMap = {
    H1: baseSize * 2.5,
    H2: baseSize * 2,
    H3: baseSize * 1.75,
    H4: baseSize * 1.5,
    H5: baseSize * 1.25,
    H6: baseSize * 1.125,
    default: baseSize,
  };

  textElements.forEach((el) => {
    // Skip elements inside the control panel
    if (el.closest("#control-panel")) return;

    const tagName = el.tagName.toUpperCase();
    const newSize = sizeMap[tagName] || sizeMap.default;
    el.style.fontSize = newSize + "px";
  });

  // Also target special elements and cards
  const additionalSelectors = document.querySelectorAll(
    "nav a, footer a, .highlight-card, .featured-item, .project-content, .cta-btn, .btn, .project, article, section",
  );

  additionalSelectors.forEach((el) => {
    if (el.closest("#control-panel")) return;
    el.style.fontSize = baseSize + "px";
  });

  showNotification(`Font size: ${currentFontSize}px`);
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================

/**
 * Shows a temporary notification message
 * @param {string} message - The message to display
 */
function showNotification(message) {
  let notification = document.getElementById("notification");

  // Create notification element if it doesn't exist
  if (!notification) {
    notification = document.createElement("div");
    notification.id = "notification";
    notification.className = "notification";
    document.body.appendChild(notification);
  }

  notification.textContent = message;
  notification.classList.add("show");

  // Auto-hide after 2 seconds
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

/**
 * Hides the notification
 */
function hideNotification() {
  const notification = document.getElementById("notification");
  if (notification) {
    notification.classList.remove("show");
  }
}

// ========================================
// INITIALIZATION
// ========================================

/**
 * Creates the interactive control panel
 */
function createControlPanel() {
  // Don't create panel if it already exists
  if (document.getElementById("control-panel")) return;

  // Create panel container
  const panel = document.createElement("div");
  panel.id = "control-panel";
  panel.className = "control-panel";

  // Panel toggle button (to show/hide the panel)
  const toggleBtn = document.createElement("button");
  toggleBtn.className = "panel-toggle btn";
  toggleBtn.textContent = "Controls";
  toggleBtn.onclick = function () {
    panel.classList.toggle("collapsed");
  };

  // Panel content
  const panelContent = document.createElement("div");
  panelContent.className = "panel-content";

  // Build panel HTML
  panelContent.innerHTML = `
    <div class="panel-section">
      <h3>Background Color</h3>
      <button class="btn" onclick="cycleTheme()">Change Theme</button>
    </div>

    <div class="panel-section">
      <h3>Theme</h3>
      <button class="btn" onclick="toggleDarkMode()">Toggle Dark/Light Mode</button>
    </div>

    <div class="panel-section">
      <h3>Click Interaction</h3>
      <button class="btn" onclick="handleClickInteraction()">Click Me!</button>
      <p id="click-message" class="interaction-message"></p>
      <p class="click-count">Total clicks: <span id="click-count">0</span></p>
    </div>

    <div class="panel-section">
      <h3>Font Size</h3>
      <div class="font-size-controls">
        <button class="btn" onclick="changeFontSize(-1)">A-</button>
        <button class="btn" onclick="changeFontSize(1)">A+</button>
      </div>
    </div>


    <div class="panel-section">
      <h3>Toggle Sections</h3>
      <div class="section-toggles">
        <button class="btn" onclick="toggleSection('highlights')">Toggle Highlights</button>
        <button class="btn" onclick="toggleSection('featured')">Toggle Featured</button>
        <button class="btn" onclick="toggleSection('projects')">Toggle Projects</button>
        <button class="btn" onclick="toggleSection('hero')">Toggle Hero</button>
        <button class="btn" onclick="toggleSection('cta')">Toggle CTA</button>
        <button class="btn" onclick="toggleSection('footer-nav')">Toggle Footer Nav</button>
      </div>
    </div>

    <div class="panel-section panel-section--reset">
      <button class="btn btn--reset" onclick="resetAll()">🔄 Reset All</button>
    </div>
  `;

  panel.appendChild(toggleBtn);
  panel.appendChild(panelContent);
  panel.classList.add("collapsed"); // Start collapsed by default
  document.body.appendChild(panel);
}

function insertonHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  const btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = ">";

  btn.onclick = function () {
    // Stop any running typing
    stopTitleTypingEffect();

    // Move to next title
    currentTitleIndex = (currentTitleIndex + 1) % titleTexts.length;

    // Reset typing state
    currentTitleCharIndex = 0;

    // Start typing ONCE
    titleTypeEffect();

    showNotification("Title changed!");
  };

  header.appendChild(btn);
}

// ========================================
// RUN ON PAGE LOAD
// ========================================

// Initialize control panel when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  createControlPanel();
  insertonHeader();
  applyTheme(currentThemeIndex); // ensures consistent initial state
});
