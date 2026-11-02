<script>
  import { onMount } from 'svelte';

  let canvas;

  const nodes = [
    { x: 0.18, y: 0.14, color: '255, 94, 44', alpha: 0.3, light: '255, 138, 92', lightAlpha: 0.14, size: 0.42, driftX: 0.06, driftY: 0.03, speed: 0.00012, phase: 0 },
    { x: 0.82, y: 0.18, color: '158, 35, 32', alpha: 0.36, light: '190, 72, 60', lightAlpha: 0.1, size: 0.46, driftX: 0.05, driftY: 0.04, speed: 0.00016, phase: 1.9 },
    { x: 0.74, y: 0.62, color: '178, 132, 54', alpha: 0.22, light: '190, 160, 90', lightAlpha: 0.12, size: 0.4, driftX: 0.06, driftY: 0.03, speed: 0.0001, phase: 3.4 },
    { x: 0.2, y: 0.72, color: '74, 92, 44', alpha: 0.28, light: '96, 126, 76', lightAlpha: 0.1, size: 0.44, driftX: 0.04, driftY: 0.04, speed: 0.00014, phase: 4.8 },
  ];

  onMount(() => {
    const ctx = canvas.getContext('2d');
    let pageW = 0;
    let pageH = 0;
    let cw = 0;
    let ch = 0;
    let mx = 0;
    let my = 0;
    let lastX = 0;
    let lastY = 0;
    let raf;

    const sizeCanvas = () => {
      pageW = document.documentElement.clientWidth;
      pageH = document.body.scrollHeight;
      cw = Math.min(460, Math.max(220, Math.round(pageW / 3)));
      ch = Math.min(900, Math.max(240, Math.round(cw * (pageH / pageW))));
      canvas.width = cw;
      canvas.height = ch;
    };

    const draw = (now) => {
      ctx.clearRect(0, 0, cw, ch);
      ctx.globalCompositeOperation = 'lighter';
      const light = document.documentElement.dataset.theme === 'light';

      nodes.forEach((node) => {
        const driftX = Math.sin(now * node.speed + node.phase) * pageW * node.driftX;
        const driftY = Math.cos(now * node.speed * 0.8 + node.phase * 1.3) * pageH * node.driftY;

        let px = pageW * node.x + driftX;
        let py = pageH * node.y + driftY;

        // Part the colour field around the pointer.
        const dx = px - mx;
        const dy = py - my;
        const distance = Math.hypot(dx, dy) || 1;
        const force = Math.max(0, 1 - distance / 440);
        px += (dx / distance) * force * force * 280;
        py += (dy / distance) * force * force * 280;

        const cx = (px / pageW) * cw;
        const cy = (py / pageH) * ch;
        const radius = Math.max(cw, ch) * node.size;

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        const color = light ? node.light : node.color;
        const alpha = light ? node.lightAlpha : node.alpha;
        gradient.addColorStop(0, `rgba(${color}, ${alpha})`);
        gradient.addColorStop(1, `rgba(${color}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, cw, ch);
      });
    };

    const move = (event) => {
      lastX = event.clientX;
      lastY = event.clientY;
      mx = event.pageX;
      my = event.pageY;
    };

    const onScroll = () => {
      mx = lastX + window.scrollX;
      my = lastY + window.scrollY;
    };

    const tick = (now) => {
      draw(now);
      raf = requestAnimationFrame(tick);
    };

    sizeCanvas();
    lastX = pageW * 0.5;
    lastY = pageH * 0.12;
    mx = lastX;
    my = lastY;

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      draw(0);
      return;
    }

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new ResizeObserver(() => {
      sizeCanvas();
    });
    observer.observe(document.body);

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  });
</script>

<canvas class="mesh" bind:this={canvas} aria-hidden="true"></canvas>

<style>
  .mesh {
    position: absolute;
    inset: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
</style>
