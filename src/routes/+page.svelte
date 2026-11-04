<script>
  import Icon from '#lib/components/Icon.svelte';
  import { projects, updates } from '#lib/data';

  const featured = projects[0];
  const latest = updates[0];
</script>

<svelte:head>
  <title>Earl Salimbot — Portfolio</title>
</svelte:head>

<section class="landing wrap">
  <div class="landing-grid">
    <div class="lead">
      <p class="role">Game developer and 3D artist</p>
      <h1>Earl<br />Salimbot</h1>
      <p class="lede">
        I build games and the art inside them, from first blockout to final frame. Nine
        years in a game studio, now finishing a Computer Science degree.
      </p>
      <div class="actions">
        <a class="btn btn--solid" href="/projects/">
          View portfolio
          <Icon size={15} />
        </a>
        <a class="btn" href="/contact/">Contact</a>
      </div>
    </div>

    <aside class="index">
      <a class="feature" href={featured.href} target="_blank" rel="noreferrer">
        <div class="thumb">
          <img src={featured.image} alt={featured.alt} />
        </div>
        <div class="cap">
          <span>Featured project</span>
          <span>{featured.year} · {featured.tags[0]}</span>
        </div>
        <h2>{featured.title} <Icon dir="up-right" size={14} /></h2>
      </a>

      <a class="latest" href={latest.href} target="_blank" rel="noreferrer">
        <span>Latest</span>
        {latest.title}
        <Icon size={12} />
      </a>

      <nav class="index-links" aria-label="Portfolio sections">
        <a href="/projects/">Projects <Icon size={14} /></a>
        <a href="/about/">About <Icon size={14} /></a>
        <a href="/skills/">Skills <Icon size={14} /></a>
        <a href="/contact/">Contact <Icon size={14} /></a>
      </nav>
    </aside>
  </div>

  <div class="landing-foot">
    <span class="portfolio">Portfolio / 2026</span>
    <span class="foot-mid">Bulacan, Philippines · Open to internships</span>
    <a href="mailto:juhniarl@gmail.com">juhniarl@gmail.com</a>
  </div>
</section>

<style>
  .landing {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100dvh - 96px);
    padding: 2.5rem 0 1.25rem;
    overflow: hidden;
  }

  .landing-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) 380px;
    gap: 4rem;
    align-items: center;
    flex: 1;
    min-height: 0;
  }

  .role {
    color: var(--text-soft);
    font-size: 1.02rem;
  }

  h1 {
    margin: 1.1rem 0 1.5rem;
    font-size: clamp(3.6rem, 6.5vw, 6rem);
    line-height: 0.9;
  }

  .lede {
    max-width: 44ch;
    color: var(--text-soft);
    font-size: 1.02rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    margin-top: 1.75rem;
  }

  .index {
    min-width: 0;
  }

  .feature {
    display: block;
  }

  .thumb {
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: 4px;
    background: var(--bg-soft);
  }

  .thumb img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  .feature:hover .thumb img {
    transform: scale(1.035);
  }

  .cap {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 0.7rem;
    color: var(--text-dim);
    font-size: 0.78rem;
  }

  .feature h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 0.35rem;
    font-size: 1.15rem;
    transition: color 0.2s ease;
  }

  .feature:hover h2 {
    color: var(--accent);
  }

  .feature h2 :global(.icon) {
    color: var(--text-dim);
  }

  .latest {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.75rem 0;
    margin-top: 0.5rem;
    border-bottom: 1px solid var(--border);
    color: var(--text-soft);
    font-size: 0.82rem;
    transition: color 0.2s ease;
  }

  .latest span {
    color: var(--text-dim);
  }

  .latest:hover {
    color: var(--text);
  }

  .index-links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 1.5rem;
    margin-top: 1.5rem;
  }

  .index-links a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.6rem 0;
    border-bottom: 1px solid var(--border);
    color: var(--text-soft);
    font-size: 0.95rem;
    transition: color 0.2s ease;
  }

  .index-links a:hover {
    color: var(--accent);
  }

  .index-links :global(.icon) {
    color: var(--text-dim);
    transition: transform 0.2s ease;
  }

  .index-links a:hover :global(.icon) {
    transform: translate(2px, -2px);
  }

  .landing-foot {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    flex-wrap: wrap;
    padding-top: 1.25rem;
    border-top: 1px solid var(--border);
    color: var(--text-dim);
    font-size: 0.78rem;
  }

  .landing-foot .portfolio {
    color: var(--text);
  }

  .landing-foot a {
    color: var(--text-soft);
    transition: color 0.2s ease;
  }

  .landing-foot a:hover {
    color: var(--accent);
  }

  @media (max-width: 1000px) {
    .landing-grid {
      grid-template-columns: minmax(0, 1fr) 300px;
      gap: 3rem;
    }
  }

  @media (max-width: 860px) {
    .landing-grid {
      grid-template-columns: 1fr;
      gap: 1.75rem;
      align-items: start;
    }

    .index {
      max-width: 560px;
    }

    .index-links {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .landing {
      height: calc(100dvh - 80px);
      padding: 1.25rem 0 0.75rem;
    }

    .foot-mid {
      display: none;
    }

    h1 {
      margin: 0.9rem 0 1.15rem;
      font-size: clamp(3rem, 13vw, 4.2rem);
    }

    .lede {
      font-size: 0.98rem;
    }

    .landing-foot {
      gap: 0.25rem 1.25rem;
      padding-top: 0.75rem;
      font-size: 0.72rem;
    }
  }

  @media (max-height: 820px) and (max-width: 860px) {
    .feature,
    .latest {
      display: none;
    }
  }
</style>
