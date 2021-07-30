<script>
	import { page } from "$app/stores";
	import logo from "./svelte-logo.svg";
	const links = [
		{ url: "/", label: "Accueil", logo: "home" },
		{ url: "/workers", label: "Employés", logo: "users" },
		{ url: "/jobs", label: "Missions", logo: "list" },
	];
	const textWeight = "normal"
</script>

<nav class="navbar is-info" role="navigation" aria-label="main navigation">
	<div class="navbar-brand ">
		<div class="navbar-item">
			<figure class="image  is-32x32">
				<img src="favicon.png" alt="logo" />
			</figure>
		</div>
		<!-- <a class="navbar-item" href="https://bulma.io">
			<img
				src="https://bulma.io/images/bulma-logo.png"
				width="112"
				height="28"
			/>
		</a> -->

		<!-- <a
			role="button"
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarBasicExample"
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a> -->
	</div>

	<div id="navbarBasicExample" class="navbar-menu">
		<div class="navbar-start">
			{#each links as { url, label, logo }}
				<div class="py-2 mx-1" class:active={$page.path === url}>
					<a
						class="navbar-item {$page.path === url
							? 'is-primary'
							: 'is-info'} has-text-light has-text-weight-{textWeight} button is-rounded"
						sveltekit:prefetch
						href={url}
					>
						<!-- <i
							class="is-centered button is-rounded is-warning fas fa-{logo} fa-fw fa-2x "
						/> -->

						{label}</a
					>
				</div>
			{/each}
			<!-- <div class="py-2" class:active={$page.path === "/"}>
				<a
					class="navbar-item button is-rounded"
					sveltekit:prefetch
					href="/">Accueil</a
				>
			</div>

			<div class="navbar-item" class:active={$page.path === "/workers"}>
				<a sveltekit:prefetch href="/workers">Employés</a>
			</div>
			<div class="navbar-item" class:active={$page.path === "/jobs"}>
				<a sveltekit:prefetch href="/jobs">Missions</a>
			</div> -->
			<!-- <a class="navbar-item"> Home </a>

			<a class="navbar-item"> Documentation </a> -->

			<!-- <div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link"> More </a>

				<div class="navbar-dropdown">
					<a class="navbar-item"> About </a>
					<a class="navbar-item"> Jobs </a>
					<a class="navbar-item"> Contact </a>
					<hr class="navbar-divider" />
					<a class="navbar-item"> Report an issue </a>
				</div>
			</div> -->
		</div>

		<!-- <div class="navbar-end">
			<div class="navbar-item">
				<div class="buttons">
					<a class="button is-primary">
						<strong>Sign up</strong>
					</a>
					<a class="button is-light"> Log in </a>
				</div>
			</div>
		</div> -->
	</div>
</nav>

<style>
	/* header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	} */

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	/* svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: "";
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	} */

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
