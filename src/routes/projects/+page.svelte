<script>
  import Icon from '#lib/components/Icon.svelte';
  import { projects } from '#lib/data';
</script>

<svelte:head>
  <title>Projects — Earl Salimbot</title>
</svelte:head>

<header class="page-head wrap">
  <h1>Projects</h1>
  <p class="lede">
    A playable vertical slice, a low-level terminal game, and a 3D character pipeline.
    Each one shipped far enough to learn something real.
  </p>
</header>

<div class="wrap projects">
  {#each projects as project}
    <article>
      <div class="media">
        <img src={project.image} alt={project.alt} loading="lazy" />
      </div>
      <div class="content">
        <p class="meta">{project.year} · {project.tags.join(' · ')}</p>
        <h2>{project.title}</h2>
        <p class="summary">{project.summary}</p>
        <p class="detail">{project.detail}</p>
        <a class="text-link" href={project.href} target="_blank" rel="noreferrer">
          {project.cta} <Icon dir="up-right" size={14} />
        </a>
      </div>
    </article>
  {/each}
</div>

<section class="wrap more">
  <p>Smaller experiments and course work live on GitHub.</p>
  <a class="text-link" href="https://github.com/urlsalimbot" target="_blank" rel="noreferrer">
    Browse repositories <Icon dir="up-right" size={14} />
  </a>
</section>

<style>
  .projects {
    padding: 1rem 0 0;
  }

  article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    padding: 2.5rem 0;
    border-top: 1px solid var(--border);
  }

  article:last-child {
    border-bottom: 1px solid var(--border);
  }

  .media img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: contain;
    border: 1px solid var(--border);
    border-radius: 4px;
    background: var(--bg-soft);
  }

  .meta {
    margin-bottom: 0.6rem;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: clamp(1.6rem, 3vw, 2.2rem);
  }

  .summary {
    margin-bottom: 0.8rem;
    color: var(--text);
    font-size: 1rem;
  }

  .detail {
    margin-bottom: 1.5rem;
    color: var(--text-soft);
    font-size: 0.92rem;
  }

  .more {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 2.5rem 0 1rem;
  }

  .more p {
    color: var(--text-soft);
    font-size: 0.95rem;
  }

  @media (max-width: 820px) {
    article {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>
