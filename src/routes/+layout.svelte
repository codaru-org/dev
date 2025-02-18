<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/assets/css/fonts.css" />
</svelte:head>

<main class="min-h-screen flex flex-col justify-center items-center overflow-x-hidden">
    {@render children()}
</main>