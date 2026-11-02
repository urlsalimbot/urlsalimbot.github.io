<script>
  import { reveal } from '#lib/actions/reveal';
  import { skills } from '#lib/data';

  const levels = [1, 2, 3, 4, 5];
</script>

<svelte:head>
  <title>Skills — Earl Salimbot</title>
</svelte:head>

<header class="page-hero wrap">
  <p class="eyebrow">Skills / 02</p>
  <h1>Tools, craft,<br />and <em>range</em>.</h1>
  <p class="lede">
    A working map of what I reach for. Each area is backed by production work,
    coursework, or projects that had to actually ship.
  </p>
</header>

<div class="wrap skill-groups">
  {#each skills as group, gi}
    <section class="group">
      <header class="group-head" use:reveal>
        <span class="index">0{gi + 1}</span>
        <h2>{group.category}</h2>
        <span class="count">{group.items.length} {group.items.length === 1 ? 'area' : 'areas'}</span>
      </header>

      <div class="grid">
        {#each group.items as skill, i}
          <article use:reveal={{ delay: i * 50 }}>
            <div class="top">
              <h3>{skill.name}</h3>
              <div class="level" aria-label="{skill.level} out of 5">
                {#each levels as level}
                  <i class:on={level <= skill.level}></i>
                {/each}
              </div>
            </div>
            <p class="meta">{skill.meta}</p>
            <p class="text">{skill.text}</p>
          </article>
        {/each}
      </div>
    </section>
  {/each}
</div>

<style>
  .skill-groups {
    padding: 2rem 0 3rem;
  }

  .group {
    padding: 3rem 0;
    border-top: 1px solid var(--border);
  }

  .group-head {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .index {
    color: var(--accent);
    font-family: var(--mono);
    font-size: 0.72rem;
    letter-spacing: 0.1em;
  }

  .group h2 {
    font-size: clamp(1.6rem, 3vw, 2.2rem);
  }

  .count {
    margin-left: auto;
    color: var(--text-dim);
    font-family: var(--mono);
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    gap: 1rem;
  }

  article {
    padding: 1.5rem;
    border: 1px solid var(--border);
    border-radius: 16px;
    background: var(--surface);
    transition:
      border-color 0.25s ease,
      transform 0.25s ease,
      background 0.25s ease;
  }

  article:hover {
    border-color: var(--border-strong);
    background: var(--surface-2);
    transform: translateY(-2px);
  }

  .top {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.6rem;
  }

  h3 {
    font-size: 1.08rem;
    letter-spacing: -0.01em;
  }

  .level {
    display: flex;
    gap: 3px;
    padding-top: 0.45rem;
  }

  .level i {
    width: 14px;
    height: 2px;
    background: var(--border-strong);
  }

  .level i.on {
    background: var(--accent);
  }

  .meta {
    margin-bottom: 0.9rem;
    color: var(--text-dim);
    font-family: var(--mono);
    font-size: 0.68rem;
    letter-spacing: 0.04em;
  }

  .text {
    color: var(--text-soft);
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    .group-head {
      flex-wrap: wrap;
    }

    .count {
      width: 100%;
      margin-left: 1.9rem;
    }
  }
</style>
