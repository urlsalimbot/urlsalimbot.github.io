<script>
  import { onMount } from 'svelte';

  let { words = [] } = $props();
  let text = $state('');
  let visible = $state(false);

  onMount(() => {
    if (!words.length) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      text = words[0];
      return;
    }

    visible = true;
    let word = 0;
    let char = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const current = words[word];
      if (!deleting) {
        char += 1;
        text = current.slice(0, char);
        if (char === current.length) {
          deleting = true;
          timer = setTimeout(tick, 1700);
          return;
        }
        timer = setTimeout(tick, 62);
      } else {
        char -= 1;
        text = current.slice(0, char);
        if (char === 0) {
          deleting = false;
          word = (word + 1) % words.length;
          timer = setTimeout(tick, 280);
          return;
        }
        timer = setTimeout(tick, 28);
      }
    };

    timer = setTimeout(tick, 450);

    return () => clearTimeout(timer);
  });
</script>

<span class="type" aria-hidden="true">{text}{#if visible}<span class="caret"></span>{/if}</span>
<span class="sr-only">{words[0]}</span>

<style>
  .type {
    display: inline-flex;
    align-items: center;
    min-height: 1.4em;
  }

  .caret {
    display: inline-block;
    width: 9px;
    height: 1.05em;
    margin-left: 5px;
    background: var(--accent);
    animation: blink 1s steps(1) infinite;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  @keyframes blink {
    0%,
    49% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .caret {
      display: none;
    }
  }
</style>
