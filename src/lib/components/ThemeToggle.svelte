<script>
  function toggle() {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage can be unavailable */
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', next === 'light' ? '#f7f5f2' : '#08070b');
  }
</script>

<button class="theme" type="button" onclick={toggle} aria-label="Toggle color theme" title="Toggle color theme">
  <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
  </svg>
</button>

<style>
  .theme {
    display: inline-grid;
    place-items: center;
    width: 38px;
    height: 38px;
    border: 1px solid var(--border);
    border-radius: 50%;
    color: var(--text-soft);
    transition:
      color 0.2s ease,
      border-color 0.2s ease,
      background 0.2s ease;
  }

  .theme:hover {
    color: var(--text);
    border-color: var(--border-strong);
    background: var(--surface);
  }

  svg {
    width: 17px;
    height: 17px;
  }

  :global([data-theme='dark']) .moon {
    display: none;
  }

  :global([data-theme='light']) .sun {
    display: none;
  }
</style>
