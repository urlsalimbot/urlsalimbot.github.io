<script>
  import { nav, site, socials } from '#lib/data';

  const year = new Date().getFullYear();
  const elsewhere = socials.filter((item) => item.label !== 'Email');
</script>

<footer class="site-footer">
  <div class="wrap">
    <div class="lead">
      <div>
        <p class="eyebrow">Open for opportunities</p>
        <h2>Have a world<br />worth building?</h2>
      </div>
      <a class="mail" href="mailto:{site.email}">
        {site.email}
        <span aria-hidden="true">↗</span>
      </a>
    </div>

    <div class="cols">
      <div class="about">
        <p class="brand">{site.name}</p>
        <p>
          Game developer and 3D artist in {site.location}. Nine years in production,
          currently finishing a Computer Science degree.
        </p>
      </div>

      <div>
        <h3>Explore</h3>
        <ul>
          {#each nav as item}
            <li><a href={item.href}>{item.label}</a></li>
          {/each}
        </ul>
      </div>

      <div>
        <h3>Elsewhere</h3>
        <ul>
          {#each elsewhere as item}
            <li>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          {/each}
          <li><a href={site.resume} target="_blank" rel="noreferrer">Resume <span aria-hidden="true">↗</span></a></li>
        </ul>
      </div>
    </div>

    <div class="bottom">
      <span>© {year} {site.name}. All rights reserved.</span>
      <span>Built with SvelteKit · {site.location}</span>
    </div>
  </div>
</footer>

<style>
  .site-footer {
    position: relative;
    z-index: 1;
    border-top: 1px solid var(--border);
    margin-top: 4rem;
    padding: 5rem 0 2rem;
    background: color-mix(in srgb, var(--bg) 72%, transparent);
    backdrop-filter: blur(6px);
  }

  .lead {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 2rem;
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--border);
  }

  h2 {
    margin-top: 1rem;
    font-size: clamp(2.4rem, 5.5vw, 4.4rem);
    line-height: 0.98;
    letter-spacing: -0.05em;
  }

  .mail {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid var(--border-strong);
    color: var(--text);
    font-family: var(--mono);
    font-size: 0.9rem;
    transition: color 0.2s ease, border-color 0.2s ease;
  }

  .mail span {
    color: var(--accent);
  }

  .mail:hover {
    color: var(--accent);
    border-color: var(--accent);
  }

  .cols {
    display: grid;
    grid-template-columns: 1.6fr 0.7fr 0.7fr;
    gap: 3rem;
    padding: 3.5rem 0;
  }

  .brand {
    margin-bottom: 0.75rem;
    color: var(--text);
    font-family: var(--display);
    font-size: 1.05rem;
    font-weight: 600;
  }

  .about p:last-child {
    max-width: 38ch;
    color: var(--text-dim);
    font-size: 0.9rem;
  }

  h3 {
    margin-bottom: 1rem;
    font-family: var(--mono);
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  ul {
    display: grid;
    gap: 0.5rem;
    list-style: none;
  }

  ul a {
    color: var(--text-soft);
    font-size: 0.9rem;
    transition: color 0.2s ease;
  }

  ul a:hover {
    color: var(--text);
  }

  ul span {
    color: var(--text-dim);
    font-size: 0.75rem;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    padding-top: 1.75rem;
    border-top: 1px solid var(--border);
    color: var(--text-dim);
    font-family: var(--mono);
    font-size: 0.7rem;
    letter-spacing: 0.04em;
  }

  @media (max-width: 900px) {
    .lead {
      flex-direction: column;
      align-items: start;
    }

    .cols {
      grid-template-columns: 1fr 1fr;
    }

    .about {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 600px) {
    .site-footer {
      padding-top: 3.5rem;
    }

    .cols {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
</style>
