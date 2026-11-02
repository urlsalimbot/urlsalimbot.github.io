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
    <a class="brand" href="/" aria-label="{site.name} — home">
      <span class="mark">E</span>
      <span class="name">{site.name}</span>
    </a>

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
      {#each nav as item, i}
        <a href={item.href} class:active={isActive(item.href)}>
          <span class="index">0{i + 1}</span>
          {item.label}
          <span class="arrow">→</span>
        </a>
      {/each}
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
    background: var(--header-bg);
    backdrop-filter: blur(18px) saturate(140%);
    border-bottom: 1px solid var(--border);
  }

  .bar {
    display: flex;
    align-items: center;
    gap: 2rem;
    height: 76px;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    color: var(--text);
    font-family: var(--display);
    font-weight: 600;
    letter-spacing: -0.02em;
    white-space: nowrap;
  }

  .mark {
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: var(--text);
    color: var(--bg);
    font-family: var(--mono);
    font-size: 0.8rem;
    font-weight: 500;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    margin-left: auto;
  }

  .links a {
    position: relative;
    padding: 0.45rem 0.8rem;
    border-radius: 999px;
    color: var(--text-dim);
    font-size: 0.86rem;
    font-weight: 500;
    transition: color 0.2s ease, background 0.2s ease;
  }

  .links a:hover {
    color: var(--text);
    background: var(--surface);
  }

  .links a.active {
    color: var(--text);
  }

  .links a.active::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--accent);
    transform: translateX(-50%);
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-left: 0.5rem;
  }

  .menu {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 38px;
    height: 38px;
    padding: 0 10px;
    border: 1px solid var(--border);
    border-radius: 50%;
  }

  .menu span {
    display: block;
    width: 100%;
    height: 1.5px;
    background: var(--text);
    transition: transform 0.25s ease;
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
    border-top: 1px solid var(--border);
    background: color-mix(in srgb, var(--bg) 94%, transparent);
    backdrop-filter: blur(24px);
    animation: drop 0.25s ease both;
  }

  .mobile nav {
    display: flex;
    flex-direction: column;
    padding: 1rem 0 1.5rem;
  }

  .mobile a {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    padding: 0.8rem 0;
    color: var(--text-soft);
    font-family: var(--display);
    font-size: 1.5rem;
    letter-spacing: -0.02em;
    border-bottom: 1px solid var(--border);
  }

  .mobile a:last-child {
    border-bottom: 0;
  }

  .mobile a.active {
    color: var(--accent);
  }

  .mobile .index {
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--text-dim);
  }

  .mobile .arrow {
    margin-left: auto;
    font-size: 1rem;
    color: var(--text-dim);
  }

  @keyframes drop {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: none;
    }
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

    .name {
      display: none;
    }
  }
</style>
