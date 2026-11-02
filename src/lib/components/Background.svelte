<script>
  import { onMount } from 'svelte';

  let surface;

  const blobs = [
    { cls: 'a', x: 0.2, y: 0.24, drift: 0.00017, phase: 0.0, amp: 0.07 },
    { cls: 'b', x: 0.82, y: 0.2, drift: 0.00023, phase: 1.7, amp: 0.06 },
    { cls: 'c', x: 0.74, y: 0.8, drift: 0.00015, phase: 3.1, amp: 0.08 },
    { cls: 'd', x: 0.24, y: 0.78, drift: 0.00021, phase: 4.4, amp: 0.05 },
    { cls: 'e', x: 0.55, y: 0.52, drift: 0.00034, phase: 2.4, amp: 0.09 },
  ];

  onMount(() => {
    const nodes = surface.querySelectorAll('.blob');
    const items = blobs.map((blob) => ({
      ...blob,
      cx: innerWidth * blob.x,
      cy: innerHeight * blob.y,
    }));

    const place = (item, i) => {
      const scale = 1 + Math.sin(performance.now() * 0.00025 + item.phase) * 0.04;
      nodes[i].style.transform = `translate3d(${item.cx}px, ${item.cy}px, 0) scale(${scale})`;
    };

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(place);
      return;
    }

    let mx = innerWidth * 0.72;
    let my = innerHeight * 0.28;
    let raf;

    const move = (event) => {
      mx = event.clientX;
      my = event.clientY;
    };

    const tick = (now) => {
      items.forEach((item, i) => {
        const driftX = Math.sin(now * item.drift + item.phase) * innerWidth * item.amp;
        const driftY = Math.cos(now * item.drift * 0.77 + item.phase * 1.3) * innerHeight * item.amp;

        let tx = innerWidth * item.x + driftX;
        let ty = innerHeight * item.y + driftY;

        // Push the blob's centre away from the pointer.
        const dx = tx - mx;
        const dy = ty - my;
        const distance = Math.hypot(dx, dy) || 1;
        const force = Math.max(0, 1 - distance / 300);
        tx += (dx / distance) * force * force * 220;
        ty += (dy / distance) * force * force * 220;

        item.cx += (tx - item.cx) * 0.05;
        item.cy += (ty - item.cy) * 0.05;

        const scale = 1 + Math.sin(now * 0.00025 + item.phase) * 0.04;
        nodes[i].style.transform = `translate3d(${item.cx}px, ${item.cy}px, 0) scale(${scale})`;
      });
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', move, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
    };
  });
</script>

<div class="surface" bind:this={surface} aria-hidden="true">
  {#each blobs as blob}
    <div class="blob {blob.cls}"></div>
  {/each}
</div>

<style>
  .surface {
    position: fixed;
    inset: 0;
    z-index: -1;
    overflow: hidden;
    pointer-events: none;
    background: var(--bg);
  }

  .blob {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
    will-change: transform;
  }

  .blob.a {
    width: 64vmax;
    height: 64vmax;
    margin: -32vmax 0 0 -32vmax;
    background: radial-gradient(circle, var(--blob-a) 0%, transparent 62%);
  }

  .blob.b {
    width: 52vmax;
    height: 52vmax;
    margin: -26vmax 0 0 -26vmax;
    background: radial-gradient(circle, var(--blob-b) 0%, transparent 60%);
  }

  .blob.c {
    width: 58vmax;
    height: 58vmax;
    margin: -29vmax 0 0 -29vmax;
    background: radial-gradient(circle, var(--blob-c) 0%, transparent 64%);
  }

  .blob.d {
    width: 48vmax;
    height: 48vmax;
    margin: -24vmax 0 0 -24vmax;
    background: radial-gradient(circle, var(--blob-d) 0%, transparent 60%);
  }

  .blob.e {
    width: 34vmax;
    height: 34vmax;
    margin: -17vmax 0 0 -17vmax;
    background: radial-gradient(circle, var(--blob-e) 0%, transparent 70%);
  }
</style>
