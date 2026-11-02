<script>
  import { onMount } from 'svelte';

  let root;

  onMount(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let tx = innerWidth * 0.5;
    let ty = innerHeight * 0.32;
    let x1 = tx;
    let y1 = ty;
    let x2 = tx;
    let y2 = ty;
    let raf;

    const move = (event) => {
      tx = event.clientX;
      ty = event.clientY;
    };

    const tick = () => {
      const k1 = reduced ? 1 : 0.075;
      const k2 = reduced ? 1 : 0.028;
      x1 += (tx - x1) * k1;
      y1 += (ty - y1) * k1;
      x2 += (tx - x2) * k2;
      y2 += (ty - y2) * k2;
      root.style.setProperty('--gx1', `${x1}px`);
      root.style.setProperty('--gy1', `${y1}px`);
      root.style.setProperty('--gx2', `${x2}px`);
      root.style.setProperty('--gy2', `${y2}px`);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', move, { passive: true });
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
    };
  });
</script>

<div class="backdrop" bind:this={root} aria-hidden="true">
  <div class="glow one"></div>
  <div class="glow two"></div>
  <div class="glow core"></div>
  <div class="glow three"></div>
  <div class="grid"></div>
  <div class="grain"></div>
</div>

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    z-index: -1;
    overflow: hidden;
    pointer-events: none;
    background: var(--bg);
  }

  .glow {
    position: absolute;
    left: 0;
    top: 0;
    width: 92vmax;
    height: 92vmax;
    margin: -46vmax 0 0 -46vmax;
    border-radius: 50%;
    background: radial-gradient(circle, var(--glow-a) 0%, transparent 62%);
    transform: translate3d(var(--gx1, 50vw), var(--gy1, 32vh), 0);
    will-change: transform;
  }

  .glow.core {
    width: 36vmax;
    height: 36vmax;
    margin: -18vmax 0 0 -18vmax;
    background: radial-gradient(circle, var(--glow-core) 0%, transparent 68%);
    transform: translate3d(var(--gx1, 50vw), var(--gy1, 32vh), 0);
  }

  .glow.two {
    background: radial-gradient(circle, var(--glow-b) 0%, transparent 60%);
    transform: translate3d(var(--gx2, 50vw), var(--gy2, 32vh), 0);
  }

  .glow.three {
    left: auto;
    right: -18vmax;
    top: auto;
    bottom: -30vmax;
    margin: 0;
    width: 80vmax;
    height: 80vmax;
    background: radial-gradient(circle, var(--glow-c) 0%, transparent 64%);
    transform: none;
    animation: drift 20s ease-in-out infinite alternate;
  }

  .grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(var(--grid) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: radial-gradient(ellipse 90% 70% at 50% 0%, #000 0%, transparent 78%);
    opacity: 0.6;
  }

  .grain {
    position: absolute;
    inset: 0;
    opacity: 0.05;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  @keyframes drift {
    from {
      transform: translate3d(0, 0, 0) scale(1);
    }
    to {
      transform: translate3d(-6vw, -4vh, 0) scale(1.12);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .glow.three {
      animation: none;
    }
  }
</style>
