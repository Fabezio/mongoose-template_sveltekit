<script>
  import Header from "$lib/Header/index.svelte";
  import Footer from "$lib/Container/Footer.svelte";
  import Weather from "$lib/Header/Weather.svelte";
  import "../app.css";
</script>

<div id="display">
  <Header />

  <!-- <Weather /> -->
  <main class="">
    <div class="frame">
      <slot />
    </div>
  </main>
  <Footer />
</div>

<style>
  #display {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  main {
    overflow-y: scroll;
    display: grid;
    width: 100%;
    text-align: center;
  }
  .frame {
    /* display: grid; */
    /* margin: 3em auto; */
  }

  /* tablets */
  @media screen and (min-width: 481px) {
    .frame {
      /* width: 480px; */
    }
  }
  /* laptops */
  @media screen and (min-width: 769px) {
    main {
      /* width: 768px; */
      grid-template-columns: 1fr 750px 1fr;
    }
    .frame {
      grid-column: 2;
    }
  }

  /* desktops */
  @media screen and (min-width: 1025px) {
    main {
      /* width: 768px; */
      /* grid-template-columns: 1fr 980px 1fr; */
    }
  }

  /* TV */
  @media screen and (min-width: 1201px) {
    main {
      /* width: 768px; */
      /* grid-template-columns: 1fr 1180px 1fr; */
    }
  }
</style>
