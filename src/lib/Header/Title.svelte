<script>
    const AppTitle = "Mongoose Template"
    export let pageTitle
</script>

<svelte:head>
	<title>{AppTitle} | {pageTitle}</title>
</svelte:head>
<h1 class="title my-3 py-3 has-text-centered">
    {pageTitle}
    <!-- <div class="welcome">
        <picture>
            <source srcset="svelte-welcome.webp" type="image/webp" />
            <img src="svelte-welcome.png" alt="Welcome" />
        </picture>
    </div> -->

    <!-- to your new<br />SvelteKit app -->
</h1>