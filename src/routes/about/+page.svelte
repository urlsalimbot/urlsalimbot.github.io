<script>
  import Icon from '#lib/components/Icon.svelte';
  import { details, site } from '#lib/data';
</script>

<svelte:head>
  <title>About — Earl Salimbot</title>
</svelte:head>

<header class="page-head wrap">
  <h1>About</h1>
  <p class="lede">
    Game developer and 3D artist. Nine years of production experience, now finishing a
    Computer Science degree.
  </p>
</header>

<section class="wrap about-grid">
  <figure class="portrait">
    <img src="/portrait.webp" alt="Earl Salimbot" width="590" height="590" />
    <figcaption>Bulacan, Philippines · 2026</figcaption>
  </figure>

  <div class="bio">
    <h2>Background</h2>
    <p>
      I work across technical implementation and creative design: game systems and tools
      on one side, 3D assets and visual development on the other. I'm currently
      completing a Computer Science degree while building projects that ship.
    </p>
    <p>
      My approach pairs efficient production with experimental ideas. The goal is work
      that is visually compelling and mechanically engaging, not one at the expense of
      the other.
    </p>

    <h3>Hobbies</h3>
    <p>
      Most of my time outside work goes into art: digital painting, 3D animation, and
      developing shaders and materials. I also stream the process, sharing how I design
      and build experiences, and play a wide range of games with the community.
    </p>

    <h3>Approach</h3>
    <p>
      Whether it's building game systems, designing levels, or crafting 3D assets, I'm
      driven by the same problem: bringing interactive worlds to life.
    </p>

    <a class="text-link" href={site.resume} target="_blank" rel="noreferrer">
      Download resume <Icon dir="up-right" size={14} />
    </a>
  </div>
</section>

<section class="wrap details">
  <dl>
    {#each details as item}
      <div>
        <dt>{item.label}</dt>
        <dd>{item.value}</dd>
        <dd class="sub">{item.sub}</dd>
      </div>
    {/each}
  </dl>
</section>

<style>
  .about-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 4.5rem;
    align-items: start;
    padding: 3rem 0 4rem;
  }

  .portrait img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 4px;
    filter: saturate(0.7);
  }

  figcaption {
    padding-top: 0.75rem;
    color: var(--text-dim);
    font-size: 0.85rem;
  }

  .bio h2 {
    margin-bottom: 1.25rem;
    font-size: clamp(1.7rem, 3vw, 2.2rem);
  }

  .bio h3 {
    margin: 2.25rem 0 0.65rem;
  }

  .bio p {
    margin-bottom: 1rem;
    max-width: 56ch;
    color: var(--text-soft);
    font-size: 1rem;
  }

  .bio .text-link {
    margin-top: 1.5rem;
  }

  .details {
    padding-bottom: 2rem;
  }

  .details dl {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding: 1.5rem 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  dt {
    margin-bottom: 0.5rem;
    color: var(--text-dim);
    font-size: 0.85rem;
  }

  dd {
    color: var(--text-soft);
    font-size: 0.92rem;
    line-height: 1.45;
  }

  dd.sub {
    color: var(--text-dim);
    font-size: 0.85rem;
  }

  @media (max-width: 900px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .portrait {
      max-width: 420px;
    }

    .details dl {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 520px) {
    .details dl {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
  }
</style>
