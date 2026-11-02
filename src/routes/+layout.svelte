<script>
  import '../app.css';
  import Nav from '#lib/components/Nav.svelte';
  import MeshGradient from '#lib/components/MeshGradient.svelte';
  import Footer from '#lib/components/Footer.svelte';

  let { children } = $props();
</script>

<a class="skip" href="#main">Skip to content</a>

<MeshGradient />
<Nav />

<main id="main" class="site-main">
  {@render children()}
</main>

<Footer />

<style>
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
