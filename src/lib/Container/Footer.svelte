<script>
  const date = new Date();
  const formatter = Intl.DateTimeFormat("fr", {
    // weekday: "long",
    // day: "numeric",
    // month: "long",
    year: "numeric",
  });
</script>

<footer class="navbar-item py-3">
  <span id="copyright" class="mx-3">
    mongoose-template_sveltekit &copy; {formatter.format(date)}
  </span>
  <span class="">
    creator: fabezio (visit <a href="https://fabric-io.netlify.app">this site</a
    >
    for more detail.)
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
    display: flex;
    /* grid-template-columns: repeat(3, 1fr); */
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    /* position: fixed; */
    justify-content: center;
    /* display: block; */
    text-align: center;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: column;

    /* padding: 0	 auto; */
  }
  footer span {
    flex: 0 0 auto;
    margin: 0 1em;
  }

  footer a {
    font-weight: 600;
  }

  @media screen and (min-width: 960px) {
    footer {
      flex-direction: row;
      /* width: 80%; */
    }
  }
</style>
