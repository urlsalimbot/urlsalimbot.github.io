<script>
  let { dir = 'right', size = 16 } = $props();
</script>

<svg
  class="icon"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.7"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  {#if dir === 'up-right'}
    <path d="M7 17 17 7M8 7h9v9" />
  {:else}
    <path d="M5 12h14M13 6l6 6-6 6" />
  {/if}
</svg>
