<script>
  import { onMount } from 'svelte';

  let surface;

  onMount(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let tx = innerWidth * 0.5;
    let ty = innerHeight * 0.35;
    let x = tx;
    let y = ty;
    let raf = 0;
    let running = false;

    const draw = () => {
      surface.style.setProperty('--lx', `${x}px`);
      surface.style.setProperty('--ly', `${y}px`);
    };

    const tick = () => {
      const k = reduced ? 1 : 0.06;
      x += (tx - x) * k;
      y += (ty - y) * k;
      draw();
      if (Math.abs(tx - x) < 0.2 && Math.abs(ty - y) < 0.2) {
        x = tx;
        y = ty;
        draw();
        running = false;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    const wake = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const move = (event) => {
      // The light moves to the side opposite the pointer.
      tx = innerWidth - event.clientX;
      ty = innerHeight - event.clientY;
      wake();
    };

    window.addEventListener('pointermove', move, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
    };
  });
</script>

<div class="surface" bind:this={surface} aria-hidden="true"></div>

<style>
  .surface {
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background:
      radial-gradient(
        72vmax circle at var(--lx, 50vw) var(--ly, 35vh),
        var(--light),
        transparent 70%
      ),
      var(--bg);
  }
</style>
