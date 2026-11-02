<script>
  import Icon from '#lib/components/Icon.svelte';
  import { highlights, projects, updates } from '#lib/data';
</script>

<svelte:head>
  <title>Earl Salimbot — Game Developer & 3D Artist</title>
</svelte:head>

<section class="hero wrap">
  <h1>Earl Salimbot</h1>
  <p class="role">Game developer and 3D artist</p>
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

  <dl class="facts">
    <div><dt>Based</dt><dd>Bulacan, Philippines</dd></div>
    <div><dt>Studying</dt><dd>BS Computer Science, 2027</dd></div>
    <div><dt>Experience</dt><dd>9 years in production</dd></div>
    <div><dt>Status</dt><dd>Open to internships</dd></div>
  </dl>
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
    <div class="section-head">
      <h2>Selected work</h2>
      <a class="text-link" href="/projects/">All projects <Icon size={14} /></a>
    </div>

    <div class="work-list">
      {#each projects as project}
        <a class="work-row" href={project.href} target="_blank" rel="noreferrer">
          <img src={project.image} alt={project.alt} loading="lazy" />
          <div>
            <p class="meta">{project.year} · {project.tags.join(' · ')}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </div>
          <Icon dir="up-right" size={16} />
        </a>
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
    padding: 5.5rem 0 3rem;
  }

  .role {
    margin: 1.25rem 0 1.5rem;
    color: var(--text);
    font-size: 1.1rem;
  }

  .lede {
    max-width: 62ch;
    color: var(--text-soft);
    font-size: 1.05rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    margin-top: 2rem;
  }

  .facts {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 4.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
  }

  dt {
    color: var(--text-dim);
    font-size: 0.78rem;
  }

  dd {
    margin-top: 0.35rem;
    color: var(--text-soft);
    font-size: 0.92rem;
    line-height: 1.4;
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

  .work-list {
    border-top: 1px solid var(--border);
  }

  .work-row {
    display: grid;
    grid-template-columns: 300px 1fr 20px;
    gap: 2rem;
    align-items: center;
    padding: 1.75rem 0;
    border-bottom: 1px solid var(--border);
  }

  .work-row img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: contain;
    border: 1px solid var(--border);
    border-radius: 4px;
    background: var(--bg-soft);
  }

  .work-row .meta {
    margin-bottom: 0.45rem;
  }

  .work-row h3 {
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    transition: color 0.2s ease;
  }

  .work-row:hover h3 {
    color: var(--accent);
  }

  .work-row p:last-child {
    max-width: 64ch;
    color: var(--text-soft);
    font-size: 0.92rem;
  }

  .work-row :global(.icon) {
    color: var(--text-dim);
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

  @media (max-width: 900px) {
    .facts {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-top: 3rem;
    }

    .rows article,
    .work-row {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .work-row img {
      max-width: 520px;
    }

    .work-row :global(.icon) {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .hero {
      padding: 3.5rem 0 2rem;
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
