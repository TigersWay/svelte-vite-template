<script lang="ts">
  import { onMount } from 'svelte';

  export let name: string;
  export let version: string;

  onMount(async () => {});
</script>

<svelte:head><title>{name} ({version})</title></svelte:head>
