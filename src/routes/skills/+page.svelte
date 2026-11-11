<script>
  import { skills } from '#lib/data';
</script>

<svelte:head>
  <title>Skills — Earl Salimbot</title>
</svelte:head>

<header class="page-head wrap">
  <h1>Skills</h1>
  <p class="lede">
    The tools and disciplines I use in production, grouped by how they show up in the
    work.
  </p>
</header>

<div class="wrap groups">
  {#each skills as group}
    <section class="group">
      <h2>{group.category}</h2>
      <div class="list">
        {#each group.items as skill}
          <article>
            <div>
              <h3>{skill.name}</h3>
              <p class="meta">{skill.meta}</p>
            </div>
            <p>{skill.text}</p>
          </article>
        {/each}
      </div>
    </section>
  {/each}
</div>

<style>
  .groups {
    padding: 2rem 0 3rem;
  }

  .group {
    padding: 2.5rem 0;
    border-top: 1px solid var(--border);
  }

  .group h2 {
    margin-bottom: 1.5rem;
    font-size: clamp(1.5rem, 2.5vw, 1.9rem);
  }

  .list {
    display: grid;
  }

  article {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 2rem;
    padding: 1.3rem 0;
    border-top: 1px solid var(--border);
  }

  article:last-child {
    border-bottom: 1px solid var(--border);
  }

  h3 {
    margin-bottom: 0.25rem;
    font-size: 1rem;
  }

  article p {
    max-width: 66ch;
    color: var(--text-soft);
    font-size: 0.93rem;
  }

  .meta {
    color: var(--text-dim);
    font-size: 0.85rem;
  }

  @media (max-width: 760px) {
    article {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
  }
</style>
