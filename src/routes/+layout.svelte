<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/assets/css/fonts.css" />
</svelte:head>

<main class="min-h-screen flex flex-col justify-center items-center overflow-x-hidden bg-[#f8f4dc] text-[#1b1d21]">
    {@render children()}
</main>