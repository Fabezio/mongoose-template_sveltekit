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

<main class="container">
	<slot />
</main>

<footer class="navbar-item py-3">
	
		<span class="">
			creator: fabezio (visit <a href="https://fabric-io.netlify.app"
				>this site</a
			>
			for more detail.)
		</span>
		<span class="mx-3">
			mongoose-template_sveltekit &copy; {formatter.format(date)}
		</span>
		<span class="">
			<i class="fab fa-github" />
			<a href="https://github.com/Fabezio/mongoose-template_sveltekit"
				>source code</a
			>
		</span>
		<!-- </div> -->
		<!-- <div> -->
		<!-- </div> -->
		<!-- <div> -->
	
</footer>

<style>
	

	footer {
		border-top: 1px solid rgba(0,0,0, 0.3);
		border-bottom: 1px solid rgba(0,0,0, 0.3);
		position: fixed;
		bottom: 0;
		display: block;
		text-align: center;	
		
		width: 100%;
			/* padding: 0	 auto; */
			
	
	}

	footer a {
		font-weight: 600;
	}

	@media (min-width: 480px) {
		footer {
			/* padding: 10px auto; */
		}
	}
</style>
