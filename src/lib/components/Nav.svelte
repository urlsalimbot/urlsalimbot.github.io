<script>
  import { page } from '$app/state';
  import { nav, site } from '#lib/data';
  import ThemeToggle from './ThemeToggle.svelte';

  let open = $state(false);
  const path = $derived(page.url.pathname);

  const isActive = (href) => (href === '/' ? path === '/' : path.startsWith(href));

  $effect(() => {
    path;
    open = false;
  });

  $effect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === 'Escape') open = false;
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  });
</script>

<header class="site-header">
  <div class="wrap bar">
    <a class="brand" href="/" aria-label="{site.name} — home">{site.name}</a>

    <nav class="links" aria-label="Primary">
      {#each nav as item}
        <a
          href={item.href}
          class:active={isActive(item.href)}
          aria-current={isActive(item.href) ? 'page' : undefined}
        >
          {item.label}
        </a>
      {/each}
    </nav>

    <div class="actions">
      <ThemeToggle />
      <button
        class="menu"
        type="button"
        onclick={() => (open = !open)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <span class:open></span>
        <span class:open></span>
      </button>
    </div>
  </div>
</header>

{#if open}
  <div class="mobile" id="mobile-nav">
    <nav class="wrap" aria-label="Mobile">
      {#each nav as item}
        <a href={item.href} class:active={isActive(item.href)}>{item.label}</a>
      {/each}
      <a class="email" href="mailto:{site.email}">{site.email}</a>
    </nav>
  </div>
{/if}

<style>
  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
  }

  .bar {
    display: flex;
    align-items: center;
    gap: 2rem;
    height: 76px;
  }

  .brand {
    color: var(--text);
    font-family: var(--display);
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    white-space: nowrap;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    margin-left: auto;
  }

  .links a {
    position: relative;
    background: linear-gradient(var(--accent), var(--accent)) no-repeat left bottom / 0 1px;
    color: var(--text-dim);
    font-size: 0.88rem;
    padding-bottom: 0.25rem;
    transition:
      color 0.2s ease,
      background-size 0.25s ease;
  }

  .links a:hover {
    color: var(--text);
  }

  .links a.active {
    color: var(--text);
  }

  .links a:hover,
  .links a.active {
    background-size: 100% 1px;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: 0.4rem;
  }

  .menu {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 44px;
    height: 44px;
    padding: 0 12px;
    border: 1px solid var(--border);
    border-radius: 6px;
  }

  .menu span {
    display: block;
    width: 100%;
    height: 1.5px;
    background: var(--text);
    transition: transform 0.2s ease;
  }

  .menu span.open:first-child {
    transform: translateY(3.25px) rotate(45deg);
  }

  .menu span.open:last-child {
    transform: translateY(-3.25px) rotate(-45deg);
  }

  .mobile {
    position: fixed;
    top: 76px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 49;
    overflow-y: auto;
    background: var(--bg);
    border-top: 1px solid var(--border);
  }

  .mobile nav {
    display: flex;
    flex-direction: column;
    padding: 1rem 0 2rem;
  }

  .mobile a {
    padding: 1rem 0;
    border-bottom: 1px solid var(--border);
    color: var(--text-soft);
    font-family: var(--display);
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: -0.02em;
  }

  .mobile a.active {
    color: var(--accent);
  }

  .mobile .email {
    margin-top: 2rem;
    padding: 0;
    border: 0;
    color: var(--text-dim);
    font-family: var(--sans);
    font-size: 0.9rem;
    letter-spacing: 0;
  }

  @media (max-width: 860px) {
    .links {
      display: none;
    }

    .actions {
      margin-left: auto;
    }

    .menu {
      display: flex;
    }
  }

  @media (max-width: 600px) {
    .bar {
      height: 68px;
    }

    .mobile {
      top: 68px;
    }
  }
</style>
