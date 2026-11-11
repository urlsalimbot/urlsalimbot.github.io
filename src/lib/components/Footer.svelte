<script>
  import { nav, site, socials } from '#lib/data';
  import Icon from './Icon.svelte';

  const year = new Date().getFullYear();
  const elsewhere = socials.filter((item) => item.label !== 'Email');
</script>

<footer class="site-footer">
  <div class="wrap">
    <div class="grid">
      <div class="identity">
        <p class="name">{site.name}</p>
        <p class="desc">Game developer and 3D artist in {site.location}.</p>
        <a class="email" href="mailto:{site.email}">{site.email}</a>
      </div>

      <nav aria-label="Footer">
        <p class="label">Pages</p>
        {#each nav as item}
          <a href={item.href}>{item.label}</a>
        {/each}
      </nav>

      <div>
        <p class="label">Elsewhere</p>
        {#each elsewhere as item}
          <a href={item.href} target="_blank" rel="noreferrer">
            {item.label}
            <Icon dir="up-right" size={12} />
          </a>
        {/each}
        <a href={site.resume} target="_blank" rel="noreferrer">
          Resume
          <Icon dir="up-right" size={12} />
        </a>
      </div>
    </div>

    <div class="bottom">
      <span>© {year} {site.name}</span>
      <span>Built with SvelteKit</span>
    </div>
  </div>
</footer>

<style>
  .site-footer {
    position: relative;
    z-index: 1;
    margin-top: 5rem;
    border-top: 1px solid var(--border);
    background: var(--bg);
  }

  .grid {
    display: grid;
    grid-template-columns: 1.6fr 0.7fr 0.7fr;
    gap: 3rem;
    padding: 3.5rem 0;
  }

  .name {
    color: var(--text);
    font-family: var(--display);
    font-size: 1.05rem;
    font-weight: 600;
  }

  .desc {
    max-width: 34ch;
    margin: 0.6rem 0 1rem;
    color: var(--text-dim);
    font-size: 0.9rem;
  }

  .email {
    color: var(--text-soft);
    font-size: 0.9rem;
    text-decoration: underline;
    text-decoration-color: var(--border-strong);
    text-underline-offset: 4px;
    transition: color 0.2s ease;
  }

  .email:hover {
    color: var(--accent);
  }

  .label {
    margin-bottom: 0.9rem;
    color: var(--text-dim);
    font-size: 0.85rem;
  }

  nav a,
  .grid > div > a {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    width: fit-content;
    padding: 0.3rem 0;
    color: var(--text-soft);
    font-size: 0.88rem;
    transition: color 0.2s ease;
  }

  nav a:hover,
  .grid > div > a:hover {
    color: var(--text);
  }

  .grid :global(.icon) {
    color: var(--text-dim);
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 1.5rem 0 2rem;
    border-top: 1px solid var(--border);
    color: var(--text-dim);
    font-size: 0.85rem;
  }

  @media (max-width: 800px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }

    .identity {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 520px) {
    .grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
</style>
