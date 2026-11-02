<script>
  import { reveal } from '#lib/actions/reveal';
  import { projects } from '#lib/data';
</script>

<svelte:head>
  <title>Projects — Earl Salimbot</title>
</svelte:head>

<header class="page-hero wrap">
  <p class="eyebrow">Projects / 03</p>
  <h1>Selected work,<br />built to <em>ship</em>.</h1>
  <p class="lede">
    Three projects that cover the range: a playable vertical slice, a low-level
    terminal game, and a production pipeline for 3D character assets.
  </p>
</header>

<div class="wrap projects">
  {#each projects as project, i}
    <article class:flip={i % 2 === 1} use:reveal>
      <div class="media">
        <img src={project.image} alt={project.alt} loading="lazy" />
      </div>

      <div class="content">
        <div class="meta">
          <span>{project.year}</span>
          <span class="tags">
            {#each project.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </span>
        </div>

        <h2>{project.title}</h2>
        <p class="summary">{project.summary}</p>
        <p class="detail">{project.detail}</p>

        <a class="arrow-link" href={project.href} target="_blank" rel="noreferrer">
          {project.cta} <span>↗</span>
        </a>
      </div>
    </article>
  {/each}
</div>

<section class="wrap more">
  <p class="eyebrow">More</p>
  <div class="more-row">
    <h2>Smaller experiments and course work live on GitHub.</h2>
    <a class="btn" href="https://github.com/urlsalimbot" target="_blank" rel="noreferrer">
      Browse repositories
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <path d="M7 17 17 7M8 7h9v9" />
      </svg>
    </a>
  </div>
</section>

<style>
  .projects {
    display: grid;
    gap: 2rem;
    padding: 2rem 0 1rem;
  }

  article {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: 22px;
    background: var(--surface);
    transition: border-color 0.3s ease;
  }

  article:hover {
    border-color: var(--border-strong);
  }

  .media {
    position: relative;
    min-height: 360px;
    overflow: hidden;
    border-right: 1px solid var(--border);
    background: var(--bg-2);
  }

  .media img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  article:hover .media img {
    transform: scale(1.015);
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: clamp(1.5rem, 3vw, 2.75rem);
  }

  .meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.5rem;
    color: var(--text-dim);
    font-family: var(--mono);
    font-size: 0.7rem;
    letter-spacing: 0.08em;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: 0.4rem;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: clamp(1.6rem, 3vw, 2.3rem);
  }

  .summary {
    margin-bottom: 0.9rem;
    color: var(--text-soft);
    font-size: 0.98rem;
  }

  .detail {
    margin-bottom: 1.75rem;
    color: var(--text-dim);
    font-size: 0.9rem;
  }

  .arrow-link {
    margin-top: auto;
  }

  .flip .media {
    order: 2;
    border-right: 0;
    border-left: 1px solid var(--border);
  }

  .more {
    padding: 4rem 0 2rem;
  }

  .more-row {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 2rem;
    padding-top: 1rem;
  }

  .more h2 {
    max-width: 24ch;
    font-size: clamp(1.6rem, 3vw, 2.2rem);
  }

  @media (max-width: 900px) {
    article {
      grid-template-columns: 1fr;
    }

    .media {
      min-height: 240px;
      aspect-ratio: 16 / 10;
      border-right: 0;
      border-bottom: 1px solid var(--border);
    }

    .flip .media {
      order: 0;
      border-left: 0;
    }
  }

  @media (max-width: 700px) {
    .more-row {
      flex-direction: column;
      align-items: start;
    }
  }
</style>
