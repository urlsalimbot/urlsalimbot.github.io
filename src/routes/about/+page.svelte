<script>
  import { reveal } from '#lib/actions/reveal';
  import { details, site } from '#lib/data';
</script>

<svelte:head>
  <title>About — Earl Salimbot</title>
</svelte:head>

<header class="page-hero wrap">
  <p class="eyebrow">About / 01</p>
  <h1>Developer by trade,<br /><em>artist</em> by instinct.</h1>
  <p class="lede">
    I care about how a game feels in the hands: the weight of a jump, the read of a
    silhouette, the half-second before a hit lands. That is the space where code and
    art have to agree.
  </p>
</header>

<section class="wrap about-grid">
  <figure class="portrait" use:reveal>
    <img src="/portrait.jpg" alt="Portrait of Earl Salimbot" width="590" height="590" />
    <figcaption>
      <span>Bulacan, Philippines</span>
      <span>Portrait / 2026</span>
    </figcaption>
  </figure>

  <div class="bio" use:reveal={{ delay: 100 }}>
    <h2>The short version</h2>
    <p>
      I'm a game developer and designer focused on creating immersive gameplay
      experiences. I'm currently completing my Computer Science degree while working
      across both technical implementation and creative design.
    </p>
    <p>
      My approach pairs efficient production practices with experimental ideas — work
      that is visually compelling and mechanically engaging, not one at the expense of
      the other.
    </p>

    <h3>Hobbies</h3>
    <p>
      Most of my time outside work goes into art: digital painting, 3D animation, and
      developing shaders and materials. I also stream the process, sharing how I design
      and build experiences, and play a wide range of games with the community.
    </p>

    <h3>The through-line</h3>
    <p>
      Whether it's building game systems, designing levels, or crafting 3D assets, I'm
      driven by the same challenge: bringing interactive worlds to life.
    </p>

    <div class="resume">
      <a class="btn btn--primary" href={site.resume} target="_blank" rel="noreferrer">
        Download resume
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
        </svg>
      </a>
      <span class="note">PDF · Updated 2026</span>
    </div>
  </div>
</section>

<section class="wrap details-wrap">
  <div class="details" use:reveal>
    {#each details as item}
      <article>
        <h2>{item.label}</h2>
        <p>{item.value}</p>
        <span>{item.sub}</span>
      </article>
    {/each}
  </div>
</section>

<style>
  .about-grid {
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;
    gap: 4.5rem;
    align-items: start;
    padding: 3rem 0 2rem;
  }

  .portrait {
    position: sticky;
    top: 110px;
  }

  .portrait img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border: 1px solid var(--border);
    border-radius: 20px;
    filter: saturate(0.65) contrast(1.02);
    transition: filter 0.5s ease, transform 0.5s ease;
  }

  .portrait:hover img {
    filter: saturate(1) contrast(1);
    transform: scale(1.01);
  }

  figcaption {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 0.9rem;
    color: var(--text-dim);
    font-family: var(--mono);
    font-size: 0.66rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .bio {
    padding-top: 0.5rem;
  }

  .bio h2 {
    margin-bottom: 1.5rem;
    font-size: clamp(1.8rem, 3vw, 2.4rem);
  }

  .bio p {
    margin-bottom: 1.25rem;
    color: var(--text-soft);
    font-size: 1.02rem;
    max-width: 62ch;
  }

  .bio h3 {
    margin: 2.5rem 0 0.85rem;
    font-family: var(--mono);
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  .resume {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2.5rem;
  }

  .note {
    color: var(--text-dim);
    font-family: var(--mono);
    font-size: 0.7rem;
  }

  .details-wrap {
    padding: 4rem 0 2rem;
  }

  .details {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: 18px;
    background: var(--border);
  }

  .details article {
    padding: 1.6rem;
    background: var(--bg);
  }

  .details h2 {
    margin-bottom: 0.9rem;
    font-family: var(--mono);
    font-size: 0.66rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  .details p {
    color: var(--text);
    font-size: 0.95rem;
  }

  .details span {
    color: var(--text-dim);
    font-size: 0.8rem;
  }

  @media (max-width: 900px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .portrait {
      position: static;
      max-width: 420px;
    }

    .details {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 560px) {
    .details {
      grid-template-columns: 1fr;
    }

    .resume {
      flex-direction: column;
      align-items: start;
    }
  }
</style>
