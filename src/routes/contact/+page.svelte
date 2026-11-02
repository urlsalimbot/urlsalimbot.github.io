<script>
  import Icon from '#lib/components/Icon.svelte';
  import { site, socials } from '#lib/data';

  const links = socials.filter((item) => item.label !== 'Email');
</script>

<svelte:head>
  <title>Contact — Earl Salimbot</title>
</svelte:head>

<header class="page-head wrap">
  <h1>Contact</h1>
  <p class="lede">
    Open to internships, freelance work, and collaborations in game development and 3D
    art. Tell me what you're building.
  </p>
</header>

<section class="wrap contact">
  <a class="email" href="mailto:{site.email}">{site.email}</a>

  <div class="links">
    {#each links as item}
      <a href={item.href} target="_blank" rel="noreferrer">
        <span class="label">{item.label}</span>
        <span class="handle">{item.handle}</span>
        <Icon dir="up-right" size={14} />
      </a>
    {/each}
  </div>

  <div class="note">
    <p>Based in Bulacan, Philippines (GMT+8). Working remote and on-site.</p>
    <a class="text-link" href={site.resume} target="_blank" rel="noreferrer">
      Download resume <Icon dir="up-right" size={14} />
    </a>
  </div>
</section>

<style>
  .contact {
    padding: 1rem 0 2rem;
  }

  .email {
    display: inline-block;
    margin-bottom: 3rem;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid var(--border-strong);
    color: var(--text);
    font-family: var(--display);
    font-size: clamp(1.6rem, 4.5vw, 2.8rem);
    font-weight: 500;
    letter-spacing: -0.03em;
    transition:
      color 0.2s ease,
      border-color 0.2s ease;
  }

  .email:hover {
    color: var(--accent);
    border-color: var(--accent);
  }

  .links {
    border-top: 1px solid var(--border);
  }

  .links a {
    display: grid;
    grid-template-columns: 150px 1fr 18px;
    gap: 1.5rem;
    align-items: center;
    padding: 1.1rem 0;
    border-bottom: 1px solid var(--border);
  }

  .links a:hover .handle {
    color: var(--text);
  }

  .label {
    color: var(--text-dim);
    font-size: 0.8rem;
  }

  .handle {
    color: var(--text-soft);
    font-size: 0.95rem;
    transition: color 0.2s ease;
  }

  .links :global(.icon) {
    color: var(--text-dim);
  }

  .note {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    padding-top: 2.5rem;
  }

  .note p {
    max-width: 52ch;
    color: var(--text-dim);
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    .links a {
      grid-template-columns: 1fr 18px;
      gap: 0.2rem 1rem;
    }

    .label {
      grid-column: 1 / -1;
    }
  }
</style>
