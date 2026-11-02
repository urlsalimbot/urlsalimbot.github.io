<script>
  import Typewriter from '#lib/components/Typewriter.svelte';
  import { reveal } from '#lib/actions/reveal';
  import { highlights, projects, roles, updates } from '#lib/data';

  const tools = [
    'Godot',
    'Unity',
    'Unreal',
    'Blender',
    'Substance Painter',
    'Krita',
    'Aseprite',
    'Python',
    'C++',
    'C#',
  ];
</script>

<svelte:head>
  <title>Earl Salimbot — Game Developer & 3D Artist</title>
</svelte:head>

<section class="hero wrap">
  <div class="copy">
    <p class="eyebrow">Available for internships</p>
    <h1>
      <span>Earl</span>
      <span>Salimbot<i>.</i></span>
    </h1>
    <p class="role"><span class="prompt">$</span> <Typewriter words={roles} /></p>
    <p class="lede">
      I build games and the worlds inside them — from the first blockout to the final
      frame. Nine years in a game studio, now finishing a Computer Science degree.
    </p>
    <div class="actions">
      <a class="btn btn--primary" href="/projects/">
        See selected work
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
      <a class="btn" href="/contact/">Get in touch</a>
    </div>
  </div>

  <aside class="card" use:reveal={{ delay: 200 }}>
    <div class="card-head">
      <span class="mono">PROFILE / 001</span>
      <span class="status"><i></i>OPEN</span>
    </div>
    <dl>
      <div><dt>Based</dt><dd>Bulacan, PH</dd></div>
      <div><dt>Focus</dt><dd>Game dev · 3D art</dd></div>
      <div><dt>Studying</dt><dd>BS CS · 2027</dd></div>
      <div><dt>Experience</dt><dd>9 years</dd></div>
    </dl>
    <div class="card-foot">
      <span class="mono">earl@dev</span>
      <span class="mono">~/portfolio</span>
    </div>
  </aside>
</section>

<div class="marquee" aria-hidden="true">
  <div class="track">
    {#each [...tools, ...tools] as tool}
      <span>{tool}<i>·</i></span>
    {/each}
  </div>
</div>

<section class="section">
  <div class="wrap">
    <header class="section-head" use:reveal>
      <div>
        <p class="eyebrow">What I do</p>
        <h2>Three sides of one craft.</h2>
      </div>
      <p>
        Technical enough to ship, visual enough to care how it feels. I move between
        engine, DCC, and canvas without losing the thread.
      </p>
    </header>

    <div class="highlights">
      {#each highlights as item, i}
        <article use:reveal={{ delay: i * 80 }}>
          <span class="index">{item.index}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <header class="section-head" use:reveal>
      <div>
        <p class="eyebrow">Selected work</p>
        <h2>Built, shipped, still learning.</h2>
      </div>
      <a class="arrow-link" href="/projects/">All projects <span>→</span></a>
    </header>

    <div class="work-grid">
      {#each projects as project, i}
        <a class="work" href={project.href} target="_blank" rel="noreferrer" use:reveal={{ delay: i * 70 }}>
          <div class="thumb">
            <img src={project.image} alt={project.alt} loading="lazy" />
          </div>
          <div class="body">
            <div class="meta">
              <span>{project.year}</span>
              <span>{project.tags[0]}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <span class="more">Open project <b>↗</b></span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <header class="section-head" use:reveal>
      <div>
        <p class="eyebrow">Latest</p>
        <h2>What changed recently.</h2>
      </div>
    </header>

    <div class="updates">
      {#each updates as item, i}
        <a href={item.href} target="_blank" rel="noreferrer" use:reveal={{ delay: i * 60 }}>
          <span class="date">{item.date}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
          <span class="go" aria-hidden="true">↗</span>
        </a>
      {/each}
    </div>
  </div>
</section>

<section class="wrap">
  <div class="cta" use:reveal>
    <p class="eyebrow eyebrow--plain">Next project</p>
    <h2>Let's build something<br />worth playing.</h2>
    <p>
      Open to internships, freelance work, and collaborations in game development and
      3D art.
    </p>
    <div class="actions">
      <a class="btn btn--primary" href="mailto:juhniarl@gmail.com">Start a conversation</a>
      <a class="btn" href="/about/">More about me</a>
    </div>
  </div>
</section>

<style>
  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 360px;
    gap: 5rem;
    align-items: end;
    padding: 4.5rem 0 5rem;
  }

  .copy h1 {
    margin: 1.5rem 0 2rem;
    font-size: clamp(4rem, 10vw, 8rem);
    font-weight: 600;
    line-height: 0.84;
    letter-spacing: -0.065em;
  }

  .copy h1 span {
    display: block;
  }

  .copy h1 i {
    color: var(--accent);
    font-style: normal;
  }

  .role {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    min-height: 1.8em;
    color: var(--text-soft);
    font-family: var(--mono);
    font-size: 0.95rem;
  }

  .prompt {
    color: var(--accent);
  }

  .lede {
    max-width: 52ch;
    margin-top: 1.5rem;
    color: var(--text-soft);
    font-size: 1.05rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 2rem;
  }

  .card {
    position: relative;
    overflow: hidden;
    padding: 1.4rem;
    border: 1px solid var(--border);
    border-radius: 18px;
    background: color-mix(in srgb, var(--bg-2) 62%, transparent);
    backdrop-filter: blur(16px);
    box-shadow: var(--shadow);
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0.7;
  }

  .card-head,
  .card-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .card-head {
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
  }

  .mono {
    font-family: var(--mono);
    font-size: 0.66rem;
    letter-spacing: 0.12em;
    color: var(--text-dim);
  }

  .status {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: var(--mono);
    font-size: 0.66rem;
    letter-spacing: 0.12em;
    color: var(--accent);
  }

  .status i {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 10px var(--accent);
  }

  dl {
    padding: 0.35rem 0;
  }

  dl div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.72rem 0;
    border-bottom: 1px solid var(--border);
  }

  dl div:last-child {
    border-bottom: 0;
  }

  dt {
    font-family: var(--mono);
    font-size: 0.64rem;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  dd {
    color: var(--text);
    font-size: 0.86rem;
  }

  .card-foot {
    padding-top: 1rem;
    border-top: 1px solid var(--border);
  }

  .marquee {
    overflow: hidden;
    mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
    border-block: 1px solid var(--border);
    padding: 1.1rem 0;
    background: color-mix(in srgb, var(--bg-2) 40%, transparent);
  }

  .track {
    display: flex;
    gap: 2.5rem;
    width: max-content;
    animation: scroll 34s linear infinite;
  }

  .marquee:hover .track {
    animation-play-state: paused;
  }

  .track span {
    display: inline-flex;
    align-items: center;
    gap: 2.5rem;
    color: var(--text-dim);
    font-family: var(--mono);
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .track i {
    color: var(--accent);
    font-style: normal;
  }

  @keyframes scroll {
    to {
      transform: translateX(-50%);
    }
  }

  .highlights {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: 20px;
    background: var(--border);
  }

  .highlights article {
    padding: 2rem;
    background: var(--bg);
    transition: background 0.3s ease;
  }

  .highlights article:hover {
    background: var(--bg-2);
  }

  .index {
    color: var(--accent);
    font-family: var(--mono);
    font-size: 0.7rem;
    letter-spacing: 0.1em;
  }

  .highlights h3 {
    margin: 2.2rem 0 0.8rem;
    font-size: 1.3rem;
  }

  .highlights p {
    color: var(--text-dim);
    font-size: 0.92rem;
  }

  .work-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }

  .work {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: 18px;
    background: var(--surface);
    transition:
      transform 0.3s ease,
      border-color 0.3s ease,
      background 0.3s ease;
  }

  .work:hover {
    transform: translateY(-4px);
    border-color: var(--border-strong);
    background: var(--surface-2);
  }

  .thumb {
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-bottom: 1px solid var(--border);
    background: var(--bg-2);
  }

  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.65s cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  .work:hover .thumb img {
    transform: scale(1.04);
  }

  .body {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 1.25rem;
  }

  .meta {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.1rem;
    color: var(--text-dim);
    font-family: var(--mono);
    font-size: 0.66rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .body h3 {
    margin-bottom: 0.7rem;
    font-size: 1.25rem;
  }

  .body p {
    color: var(--text-dim);
    font-size: 0.9rem;
  }

  .more {
    margin-top: auto;
    padding-top: 1.5rem;
    color: var(--text);
    font-family: var(--mono);
    font-size: 0.72rem;
    letter-spacing: 0.06em;
  }

  .more b {
    color: var(--accent);
    font-weight: 400;
  }

  .updates {
    border-top: 1px solid var(--border);
  }

  .updates a {
    display: grid;
    grid-template-columns: 132px 1fr 24px;
    gap: 1.5rem;
    align-items: start;
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--border);
    transition: background 0.25s ease;
  }

  .updates a:hover h3 {
    color: var(--accent);
  }

  .date {
    padding-top: 0.2rem;
    color: var(--text-dim);
    font-family: var(--mono);
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .updates h3 {
    margin-bottom: 0.35rem;
    font-size: 1.05rem;
    transition: color 0.25s ease;
  }

  .updates p {
    color: var(--text-dim);
    font-size: 0.9rem;
  }

  .go {
    color: var(--text-dim);
    transition: transform 0.25s ease, color 0.25s ease;
  }

  .updates a:hover .go {
    color: var(--accent);
    transform: translate(2px, -2px);
  }

  .cta {
    margin: 6rem 0 4rem;
    padding: clamp(2.5rem, 6vw, 5rem);
    border: 1px solid var(--border);
    border-radius: 24px;
    text-align: center;
    background:
      radial-gradient(70% 150% at 50% 0%, var(--surface-2), transparent 70%),
      color-mix(in srgb, var(--bg-2) 45%, transparent);
  }

  .cta h2 {
    margin: 1.25rem 0 1rem;
    font-size: clamp(2.2rem, 5vw, 3.6rem);
    letter-spacing: -0.05em;
  }

  .cta p {
    max-width: 46ch;
    margin-inline: auto;
    color: var(--text-dim);
  }

  .cta .actions {
    justify-content: center;
  }

  @media (max-width: 1024px) {
    .hero {
      grid-template-columns: 1fr;
      gap: 3rem;
      align-items: start;
    }

    .card {
      max-width: 420px;
    }

    .work-grid {
      grid-template-columns: 1fr 1fr;
    }

    .work-grid .work:last-child {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 760px) {
    .hero {
      padding: 3rem 0 3.5rem;
    }

    .highlights {
      grid-template-columns: 1fr;
    }

    .work-grid {
      grid-template-columns: 1fr;
    }

    .work-grid .work:last-child {
      grid-column: auto;
    }

    .updates a {
      grid-template-columns: 1fr 20px;
      gap: 0.4rem 1rem;
    }

    .date {
      grid-column: 1 / -1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .track {
      animation: none;
    }
  }
</style>
