<script>
  import { reveal } from '#lib/actions/reveal';
  import { site, socials } from '#lib/data';
</script>

<svelte:head>
  <title>Contact — Earl Salimbot</title>
</svelte:head>

<header class="page-hero wrap">
  <p class="eyebrow">Contact / 04</p>
  <h1>Let's make something<br /><em>memorable</em>.</h1>
  <p class="lede">
    Open to internships, freelance work, and collaborations in game development, 3D
    art, and the tools that support them. Tell me what you're building.
  </p>
</header>

<section class="wrap contact-grid">
  <div class="details" use:reveal>
    <a class="mail" href="mailto:{site.email}">
      {site.email}
      <span aria-hidden="true">↗</span>
    </a>

    <div class="rows">
      {#each socials as item}
        <a href={item.href} target="_blank" rel="noreferrer">
          <span class="label">{item.label}</span>
          <span class="handle">{item.handle}</span>
          <span class="arrow" aria-hidden="true">↗</span>
        </a>
      {/each}
      <div class="row static">
        <span class="label">Based</span>
        <span class="handle">{site.location}</span>
      </div>
    </div>
  </div>

  <aside class="status" use:reveal={{ delay: 100 }}>
    <div class="status-head">
      <span class="eyebrow eyebrow--plain">Status</span>
      <span class="open"><i></i>Open</span>
    </div>
    <dl>
      <div><dt>Looking for</dt><dd>Internship · Freelance</dd></div>
      <div><dt>Working</dt><dd>Remote · On-site</dd></div>
      <div><dt>Studying</dt><dd>BS CS · 2027</dd></div>
      <div><dt>Timezone</dt><dd>GMT+8 · Philippines</dd></div>
    </dl>
    <a class="btn" href={site.resume} target="_blank" rel="noreferrer">View resume <span>↗</span></a>
  </aside>
</section>

<style>
  .contact-grid {
    display: grid;
    grid-template-columns: 1.35fr 0.65fr;
    gap: 4rem;
    align-items: start;
    padding: 3rem 0 3rem;
  }

  .mail {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 3rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-strong);
    color: var(--text);
    font-family: var(--display);
    font-size: clamp(1.4rem, 4vw, 2.4rem);
    letter-spacing: -0.03em;
    transition: color 0.25s ease, border-color 0.25s ease;
  }

  .mail span {
    color: var(--accent);
    font-size: 0.6em;
  }

  .mail:hover {
    color: var(--accent);
    border-color: var(--accent);
  }

  .rows {
    border-top: 1px solid var(--border);
  }

  .rows a,
  .row {
    display: grid;
    grid-template-columns: 130px 1fr 24px;
    gap: 1rem;
    align-items: center;
    padding: 1.2rem 0;
    border-bottom: 1px solid var(--border);
  }

  .rows a {
    transition: background 0.2s ease;
  }

  .rows a:hover .handle {
    color: var(--text);
  }

  .rows a:hover .arrow {
    color: var(--accent);
    transform: translate(2px, -2px);
  }

  .label {
    color: var(--text-dim);
    font-family: var(--mono);
    font-size: 0.66rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .handle {
    color: var(--text-soft);
    font-size: 0.95rem;
    transition: color 0.2s ease;
  }

  .arrow {
    color: var(--text-dim);
    text-align: right;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .status {
    padding: 1.5rem;
    border: 1px solid var(--border);
    border-radius: 18px;
    background: var(--surface);
    backdrop-filter: blur(12px);
  }

  .status-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
  }

  .open {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--accent);
    font-family: var(--mono);
    font-size: 0.66rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .open i {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 10px var(--accent);
  }

  dl div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border);
  }

  dl div:last-child {
    border-bottom: 0;
  }

  dt {
    color: var(--text-dim);
    font-family: var(--mono);
    font-size: 0.64rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  dd {
    color: var(--text-soft);
    font-size: 0.85rem;
    text-align: right;
  }

  .status .btn {
    width: 100%;
    margin-top: 1.25rem;
  }

  @media (max-width: 900px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .status {
      max-width: 480px;
    }
  }

  @media (max-width: 560px) {
    .rows a,
    .row {
      grid-template-columns: 1fr 20px;
      gap: 0.2rem 1rem;
    }

    .label {
      grid-column: 1 / -1;
    }

    .arrow {
      display: none;
    }
  }
</style>
