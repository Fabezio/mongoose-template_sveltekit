<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from "$lib/Counter/index.svelte";
	import Title from '$lib/Header/Title.svelte'
</script>

<Title pageTitle="Accueil" />


<section>
	
	<article class="section">
		Cette application est destinée à la gestion de plannings des effectifs
		de sécurité

		<!-- <h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2> -->

		<!-- <Counter /> -->
	</article>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
	/*

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
	*/
</style>
