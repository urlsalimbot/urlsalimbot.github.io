<script>
  import '../app.css';
  import { page } from '$app/state';
  import Background from '#lib/components/Background.svelte';
  import Nav from '#lib/components/Nav.svelte';
  import Footer from '#lib/components/Footer.svelte';

  let { children } = $props();
</script>

<a class="skip" href="#main">Skip to content</a>

<Background />
<Nav />

<main id="main" class="site-main">
  {#key page.url.pathname}
    <div class="page">{@render children()}</div>
  {/key}
</main>

<Footer />

<style>
  .page {
    animation: page-in 0.45s cubic-bezier(0.2, 0.7, 0.2, 1) both;
  }

  .skip {
    position: fixed;
    top: -80px;
    left: 1rem;
    z-index: 100;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    background: var(--text);
    color: var(--bg);
    font-size: 0.85rem;
    transition: top 0.2s ease;
  }

  .skip:focus {
    top: 1rem;
  }

  @keyframes page-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .page {
      animation: none;
    }
  }
</style>
