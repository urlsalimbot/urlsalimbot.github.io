<script>
  import '../app.css';
  import Nav from '#lib/components/Nav.svelte';
  import Footer from '#lib/components/Footer.svelte';
  import { onNavigate } from '$app/navigation';
  import { page } from '$app/state';

  const isHome = $derived(page.url.pathname === '/');

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const leavingHome = navigation.from?.url.pathname === '/' && navigation.to?.url.pathname !== '/';
    const enteringHome = navigation.to?.url.pathname === '/' && navigation.from?.url.pathname !== '/';

    if (leavingHome) document.body.style.overflow = '';
    if (enteringHome) document.body.style.overflow = 'hidden';

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  $effect(() => {
    document.body.style.overflow = isHome ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  });

  let { children } = $props();
</script>

<a class="skip" href="#main">Skip to content</a>

<Nav />

<main id="main" class="site-main" class:home-main={isHome}>
  {@render children()}
</main>

{#if !isHome}<Footer />{/if}

<style>
  .home-main {
    height: 100dvh;
    padding-top: 96px;
  }

  @media (max-width: 600px) {
    .home-main {
      padding-top: 80px;
    }
  }

  .skip {
    position: fixed;
    top: -80px;
    left: 1rem;
    z-index: 100;
    padding: 0.6rem 1rem;
    border-radius: 4px;
    background: var(--text);
    color: var(--bg);
    font-size: 0.85rem;
    transition: top 0.2s ease;
  }

  .skip:focus {
    top: 1rem;
  }
</style>
