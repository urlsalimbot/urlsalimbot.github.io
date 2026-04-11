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
// 2. BACKGROUND COLOR CHANGER
// ========================================

// Array of background colors to cycle through
const bgColors = [
  "#050505", // Original dark
  "#0a192f", // Navy blue
  "#1a0a2e", // Deep purple
  "#0a2e1a", // Dark green
  "#2e0a0a", // Dark red
  "#2e1a0a", // Dark orange
  "#1a1a2e", // Dark indigo
];
let currentBgIndex = 0;

/**
 * Changes the background color on each click
 */
function changeBackgroundColor() {
  currentBgIndex = (currentBgIndex + 1) % bgColors.length;
  document.body.style.backgroundColor = bgColors[currentBgIndex];
  document.body.style.backgroundImage = "none";
  showNotification(`Background changed!`);
}

// ========================================
// 3. FONT COLOR CHANGER
// ========================================

// Array of text colors to cycle through
const textColors = [
  "#c9c9c9", // Original light gray
  "#a0c4ff", // Soft blue
  "#bdb2ff", // Soft purple
  "#caffbf", // Soft green
  "#ffadad", // Soft red
  "#ffd6a5", // Soft orange
  "#fdffb6", // Soft yellow
];
let currentTextColorIndex = 0;

/**
 * Changes the text color on each click - targets ALL text elements
 */
function changeFontColor() {
  currentTextColorIndex = (currentTextColorIndex + 1) % textColors.length;
  const color = textColors[currentTextColorIndex];

  // Change body color (inheritance base)
  document.body.style.color = color;

  // Target all text elements explicitly
  const textElements = document.querySelectorAll(
    "h1, h2, h3, h4, h5, h6, p, span, a, li, label, button, input, textarea, select, option, strong, em, small, blockquote, cite, code, pre, td, th, caption, figcaption, legend, dt, dd, abbr, address, b, i, u, mark, sub, sup, time, var, q, samp, kbd, del, ins"
  );

  textElements.forEach((el) => {
    // Skip elements inside the control panel to keep it readable
    if (el.closest("#control-panel")) return;
    el.style.color = color;
  });

  // Also target nav links, footer links, and card elements
  const additionalSelectors = document.querySelectorAll(
    "nav a, footer a, .highlight-card, .featured-item, .project-content, .cta-btn, .btn"
  );

  additionalSelectors.forEach((el) => {
    if (el.closest("#control-panel")) return;
    el.style.color = color;
  });

  showNotification(`Text color changed!`);
}

// ========================================
// 4. DARK MODE TOGGLE
// ========================================

let isDarkMode = true; // Starts in dark mode by default

/**
 * Toggles between light mode and dark mode
 */
function toggleDarkMode() {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    // Apply dark mode
    document.body.style.setProperty("--bg-primary", "#050505");
    document.body.style.setProperty("--bg-secondary", "#0a0a0a");
    document.body.style.setProperty("--bg-tertiary", "#0f0f0f");
    document.body.style.setProperty("--bg-card", "#0d0d0d");
    document.body.style.setProperty("--text-primary", "#ffffff");
    document.body.style.setProperty("--text-secondary", "#c9c9c9");
    document.body.style.setProperty("--text-muted", "#a0a0a0");
    document.body.style.backgroundColor = "#050505";
    document.body.style.color = "#c9c9c9";
    document.body.style.backgroundImage = "";
    document.body.classList.remove("light-mode");
    showNotification("Dark mode activated!");
  } else {
    // Apply light mode
    document.body.style.setProperty("--bg-primary", "#ffffff");
    document.body.style.setProperty("--bg-secondary", "#f5f5f5");
    document.body.style.setProperty("--bg-tertiary", "#e8e8e8");
    document.body.style.setProperty("--bg-card", "#fafafa");
    document.body.style.setProperty("--text-primary", "#1a1a1a");
    document.body.style.setProperty("--text-secondary", "#333333");
    document.body.style.setProperty("--text-muted", "#555555");
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#333333";
    document.body.style.backgroundImage = "none";
    document.body.classList.add("light-mode");
    showNotification("Light mode activated!");
  }
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
      clickMessages.length - 1
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
    "h1, h2, h3, h4, h5, h6, p, span, a, li, label, button, input, textarea, select, option, strong, em, small, blockquote, cite, code, pre, td, th, caption, figcaption, legend, dt, dd, abbr, address, b, i, u, mark, sub, sup, time, var, q, samp, kbd, del, ins"
  );

  textElements.forEach((el) => {
    el.style.color = "";
    el.style.fontSize = "";
  });

  const additionalSelectors = document.querySelectorAll(
    "nav a, footer a, .highlight-card, .featured-item, .project-content, .cta-btn, .btn, .project, article, section"
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

  // Clear notification
  hideNotification();

  showNotification("All changes reset to default!");
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

const titleTypingTexts = [
  "Earl Salimbot",
  "Game Developer",
  "Game Designer",
  "3D Artist",
  "Creative Thinker",
  "Problem Solver",
];
let currentTitleTypingIndex = 0;
let currentTitleCharIndex = 0;
let isTitleDeleting = false;
let titleTypingInterval;

/**
 * Creates a typing effect for the header title
 */
function titleTypeEffect() {
  const header = document.getElementById("header");
  if (!header) return;

  const textNode = header.childNodes[0];
  if (!textNode) return;

  const currentText = titleTypingTexts[currentTitleTypingIndex];

  if (isTitleDeleting) {
    textNode.textContent = " " + currentText.substring(0, currentTitleCharIndex - 1) + " ";
    currentTitleCharIndex--;
  } else {
    textNode.textContent = " " + currentText.substring(0, currentTitleCharIndex + 1) + " ";
    currentTitleCharIndex++;
  }

  let typeSpeed = isTitleDeleting ? 50 : 100;

  if (!isTitleDeleting && currentTitleCharIndex === currentText.length) {
    typeSpeed = 2000; // Pause at end
    isTitleDeleting = true;
  } else if (isTitleDeleting && currentTitleCharIndex === 0) {
    isTitleDeleting = false;
    currentTitleTypingIndex = (currentTitleTypingIndex + 1) % titleTypingTexts.length;
    typeSpeed = 500; // Pause before next word
  }

  titleTypingInterval = setTimeout(titleTypeEffect, typeSpeed);
}

/**
 * Starts the typing effect for the header title
 */
function startTitleTypingEffect() {
  if (titleTypingInterval) {
    clearTimeout(titleTypingInterval);
  }
  currentTitleCharIndex = 0;
  isTitleDeleting = false;
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
    "h1, h2, h3, h4, h5, h6, p, span, a, li, label, button, input, textarea, select, option, strong, em, small, blockquote, cite, code, pre, td, th, caption, figcaption, legend, dt, dd, abbr, address, b, i, u, mark, sub, sup, time, var, q, samp, kbd, del, ins"
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
    "nav a, footer a, .highlight-card, .featured-item, .project-content, .cta-btn, .btn, .project, article, section"
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
      <h3>Text Manipulation</h3>
      <button class="btn" onclick="changeTitle()">Change Title</button>
    </div>

    <div class="panel-section">
      <h3>Background Color</h3>
      <button class="btn" onclick="changeBackgroundColor()">Change Background</button>
    </div>

    <div class="panel-section">
      <h3>Font Color</h3>
      <button class="btn" onclick="changeFontColor()">Change Text Color</button>
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
      <h3>Header Title Typing</h3>
      <button class="btn" onclick="startTitleTypingEffect()">Start Title Typing</button>
      <button class="btn" onclick="stopTitleTypingEffect()">Stop Title Typing</button>
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

// ========================================
// RUN ON PAGE LOAD
// ========================================

// Initialize control panel when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  createControlPanel();
});
