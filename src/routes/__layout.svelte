<script>
	import Header from "$lib/Header/index.svelte";
	// import "../app.css";
	const date = new Date();
	const formatter = Intl.DateTimeFormat("fr", {
		// weekday: "long",
		// day: "numeric",
		// month: "long",
		year: "numeric",
	});
</script>

<Header />

<main>
	<slot />
</main>

<footer class="footer">
	<div>
		<span>
			creator: fabezio (visit <a href="https://fabric-io.netlify.app"
				>this site</a
			>
			for more detail.)
		</span>
		<span class="ml-3">
			mongoose-template_sveltekit &copy; {formatter.format(date)}
		</span>
		<span class="ml-3">
			<i class="fab fa-github" />
			<a href="https://github.com/Fabezio/mongoose-template_sveltekit"
				>source code</a
			>
		</span>
		<!-- </div> -->
		<!-- <div> -->
		<!-- </div> -->
		<!-- <div> -->
	</div>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
