<script>
  import { page } from "$app/stores";
  import Clock from "./Clock.svelte";

  const brandTitle = "Mongoose Template";

  const links = [
    { url: "/", label: "Accueil", logo: "home" },
    { url: "/workers", label: "Employés", logo: "users" },
    { url: "/jobs", label: "Missions", logo: "list" },
  ];
  const textWeight = "normal";
</script>

<nav class="has-background-info" role="navigation" aria-label="main navigation">
  <div class="navbar-brand ">
    <figure class=" image is-48x48">
      <img src="favicon.png" alt="logo" />
    </figure>
  </div>

  <div class="brand has-text-light is-size-6 has-text-weight-bold ml-1">
    {brandTitle.toUpperCase()}
  </div>
  <!-- <a class="navbar-item" href="https://bulma.io">
			<img
				src="https://bulma.io/images/bulma-logo.png"
				width="112"
				height="28"
			/>
		</a> -->

  <a
    role="button"
    aria-label="menu"
    aria-expanded="false"
    data-target="navbarBasicExample"
  >
    <i class="fas fa-bars fa-2x " />
    <!-- <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" /> -->
  </a>
  <!-- </div> -->

  <div id="navbarBasicExample" class="menu">
    <div class="links">
      {#each links as { url, label, logo }}
        <div class="py-2 mx-1" class:active={$page.path === url}>
          <a
            class="navbar-item has-text-light {$page.path === url
              ? 'is-primary'
              : 'is-info'} has-text-weight-{textWeight} "
            sveltekit:prefetch
            href={url}
          >
            <i class=" logo fas fa-{logo}  fa-fw" />
            <span class="label  button   is-rounded">
              {label}
            </span>
          </a>
        </div>
      {/each}
    </div>
    <div class="clock">
      <Clock />
    </div>
  </div>
</nav>

<style>
  nav {
    display: grid;
    grid-template-columns: 60px 1fr 60px;

    align-items: center;
    justify-items: space-between;
    grid-auto-rows: dense;
    grid-auto-flow: auto 1fr;
  }
  nav .brand {
    grid-column: span 2;
    justify-self: center;
  }
  nav > a {
    display: visible;
    color: white;
    justify-self: end;
    padding-right: 8px;
  }
  nav h1 {
  }
  nav .menu {
    grid-row: 2;
    grid-column: 1 / -1;
  }
  .clock {
    grid-row: 2;
    grid-column: span 2 / -1;
    justify-self: end;
    align-self: center;
  }

  .menu {
    display: flex;
    align-items: center;
  }
  .menu .links {
    display: flex;
    flex: 1 0 auto;
  }
  .links .label {
    display: none;
    align-self: center;
  }

  a:hover {
    color: var(--accent-color);
  }
  @media screen and (min-width: 769px) {
    nav {
      grid-template-columns: 60px 1fr 4fr;
    }
    nav .brand,
    nav .navbar-brand {
      grid-row: 1;
    }
    nav .brand {
      grid-column: 2;
      justify-self: start;
    }
    nav > a {
      display: none;
      grid-row: 2;
      grid-column: 1 / -1;
    }
    .links {
      justify-content: flex-end;
    }
    .links .logo {
      display: none;
    }
    .links .label {
      display: initial;
    }

    nav .menu {
      grid-row: 1;
      grid-column: 3;
    }
  }
</style>
