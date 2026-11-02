<script>
  import Icon from '#lib/components/Icon.svelte';
  import { highlights, projects, updates } from '#lib/data';
</script>

<svelte:head>
  <title>Earl Salimbot — Game Developer & 3D Artist</title>
</svelte:head>

<section class="hero wrap">
  <div class="hero-grid">
    <div class="identity">
      <p class="role">Game developer and <span>3D artist</span></p>
      <h1>Earl<br />Salimbot</h1>
    </div>

    <div class="intro">
      <p class="lede">
        I build games and the art inside them, from first blockout to final frame. Nine
        years in a game studio, now finishing a Computer Science degree.
      </p>
      <div class="actions">
        <a class="btn btn--solid" href="/projects/">
          Projects
          <Icon size={15} />
        </a>
        <a class="btn" href="/contact/">Contact</a>
      </div>
    </div>
  </div>

  <dl class="facts">
    <div><dt>Based</dt><dd>Bulacan, Philippines</dd></div>
    <div><dt>Studying</dt><dd>BS Computer Science, 2027</dd></div>
    <div><dt>Experience</dt><dd>9 years in production</dd></div>
    <div><dt>Status</dt><dd>Open to internships</dd></div>
  </dl>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <h2>Selected work</h2>
      <a class="text-link" href="/projects/">All projects <Icon size={14} /></a>
    </div>

    <div class="work-strip">
      {#each projects as project}
        <a class="tile" href={project.href} target="_blank" rel="noreferrer">
          <div class="thumb">
            <img src={project.image} alt={project.alt} loading="lazy" />
          </div>
          <div class="caption">
            <h3>{project.title}</h3>
            <span>{project.year} <Icon dir="up-right" size={12} /></span>
          </div>
          <p>{project.summary}</p>
        </a>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2>What I do</h2>
    <div class="rows">
      {#each highlights as item}
        <article>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2>Updates</h2>
    <div class="updates">
      {#each updates as item}
        <a href={item.href} target="_blank" rel="noreferrer">
          <time>{item.date}</time>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
          <Icon dir="up-right" size={15} />
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .hero {
    padding: 4.5rem 0 1.5rem;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1.25fr 0.75fr;
    gap: 4rem;
    align-items: end;
  }

  .role {
    margin-bottom: 1.1rem;
    color: var(--text-soft);
    font-size: 1.02rem;
  }

  .role span {
    color: var(--accent);
  }

  h1 {
    font-size: clamp(4rem, 9vw, 6rem);
    line-height: 0.9;
  }

  .intro {
    padding-bottom: 0.4rem;
  }

  .lede {
    color: var(--text-soft);
    font-size: 1.02rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    margin-top: 1.75rem;
  }

  .facts {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 3.5rem;
    padding-top: 1.35rem;
    border-top: 1px solid var(--border);
  }

  dt {
    color: var(--text-dim);
    font-size: 0.78rem;
  }

  dd {
    margin-top: 0.3rem;
    color: var(--text-soft);
    font-size: 0.92rem;
    line-height: 1.4;
  }

  .work-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .tile {
    display: block;
    min-width: 0;
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

  .tile:hover .thumb img {
    transform: scale(1.04);
  }

  .caption {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 0.85rem;
  }

  .caption h3 {
    font-size: 1.08rem;
    transition: color 0.2s ease;
  }

  .tile:hover .caption h3 {
    color: var(--accent);
  }

  .caption span {
    display: inline-flex;
    align-items: center;
    gap: 0.2rem;
    color: var(--text-dim);
    font-size: 0.78rem;
    white-space: nowrap;
  }

  .tile > p {
    margin-top: 0.35rem;
    color: var(--text-soft);
    font-size: 0.9rem;
  }

  .rows {
    margin-top: 2rem;
    border-top: 1px solid var(--border);
  }

  .rows article {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 2rem;
    padding: 1.75rem 0;
    border-bottom: 1px solid var(--border);
  }

  .rows p {
    max-width: 64ch;
    color: var(--text-soft);
    font-size: 0.95rem;
  }

  .updates {
    margin-top: 2rem;
    border-top: 1px solid var(--border);
  }

  .updates a {
    display: grid;
    grid-template-columns: 130px 1fr 18px;
    gap: 2rem;
    align-items: start;
    padding: 1.4rem 0;
    border-bottom: 1px solid var(--border);
  }

  .updates time {
    color: var(--text-dim);
    font-size: 0.78rem;
    font-variant-numeric: tabular-nums;
  }

  .updates h3 {
    margin-bottom: 0.25rem;
    font-size: 1.02rem;
    transition: color 0.2s ease;
  }

  .updates a:hover h3 {
    color: var(--accent);
  }

  .updates p {
    color: var(--text-soft);
    font-size: 0.9rem;
  }

  .updates :global(.icon) {
    margin-top: 0.3rem;
    color: var(--text-dim);
  }

  @media (max-width: 1000px) {
    .hero-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
      align-items: start;
    }

    .intro {
      max-width: 60ch;
    }

    .facts {
      margin-top: 2.5rem;
    }

    .work-strip {
      gap: 1rem;
    }
  }

  @media (max-width: 800px) {
    .facts {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .rows article {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }

    .work-strip {
      grid-template-columns: 1fr;
      gap: 1.75rem;
    }

    .tile {
      max-width: 560px;
    }
  }

  @media (max-width: 600px) {
    .hero {
      padding: 3rem 0 1rem;
    }

    .updates a {
      grid-template-columns: 1fr 16px;
      gap: 0.4rem 1rem;
    }

    .updates time {
      grid-column: 1 / -1;
    }
  }
</style>
