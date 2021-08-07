<script>
	import Header from "$lib/Header/index.svelte";
	import Footer from "$lib/Container/Footer.svelte";
	import Weather from "$lib/Header/Weather.svelte";
	import "../app.css";
</script>

<Header />

<!-- <Weather /> -->
<main class="container">
	<slot />
</main>
<Footer />

<style>
	@media (min-width: 480px) {
	}
</style>
