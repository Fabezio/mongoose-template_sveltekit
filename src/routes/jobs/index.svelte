<script>
  import { onMount } from "svelte";
  import dateFormat from "dateformat";
  import axios from "axios";

  import Title from "$lib/Header/Title.svelte";
  import Input from "$lib/Forms/Input.svelte";
  import Select from "$lib/Forms/Select.svelte";
  import Button from "$lib/Compos/Button.svelte";
  import NotifBar from "$lib/Compos/NotifBar.svelte";
  import { joursFeriés } from "$lib/joursferiés";

  const today = dateFormat(new Date(), "isoDate");
  const thisDay = dateFormat(new Date(), "fullDate");
  //   const thisDay =

  let showAll = false;
  let addJob = false;
  let selected = ""; //temporaire
  let date = "";
  let chefJour = "";
  let chefNuit = "";
  let agentJour = "";
  let agentNuit = "";
  let job = {};
  let jobs = [];
  const url = "http://localhost:3000/api/jobs";
  const workersUrl = "http://localhost:3000/api/workers";
  let workers = [];
  let newJobsList = [];
  let month = 0;
  async function fetchWorkers() {
    const { data } = await axios.get(workersUrl);
    workers = data;
  }

  let full = false;
  function submit(e) {
    full = true;
    let isFerie = false;
    e.preventDefault();
    for (let k in joursFeriés) {
      if (date === k) isFerie = true;
      // console.log(k);
    }

    job = {
      date: date,
      isFerie: isFerie,
      chefJour: pickWorker(chefJour),
      agentJour: pickWorker(agentJour),
      chefNuit: pickWorker(chefNuit),
      agentNuit: pickWorker(agentNuit),
    };
    const response = axios.post(url + "/add", job);
    jobs = [...jobs, response.data];
    full = false;
    addJob = false;
    fetchWorkers();
    fetchData();
  }
  const pageTitle = "Plannings du mois de Septembre";

  onMount(() => {
    fetchWorkers();
    fetchData();
  });
  function pickWorker(nom) {
    // console.log("nom:", nom);
    let found;
    workers.map((w) => {
      if (w.nom === nom) found = w;
    });
    console.log(found);
    delete found._id;
    return found;
  }
  async function fetchData() {
    const { data } = await axios.get(url);
    data.map((item) => {
      if (item.date.split("-")[1] == parseInt(today.split("-")[1]) + 1)
        newJobsList = [...newJobsList, item];
    });
    jobs = data;
    return newJobsList;
  }
  async function removeJob(id) {
    const response = await axios.delete(`${url}/${id}`);
    if (response.data.id === id) {
      jobs = jobs.filter((w) => w.id !== id);
    }
    fetchData();
  }
  function previous() {
    month -= 1;
    console.log(month);
    fetchData();
  }
  function next() {
    month += 1;
    console.log(month);
    fetchData();
  }
</script>

<div class="grid">
  <!-- <button on:click={() => previous()}>
    <i class="fas fa-chevron-left fa-lg" />
  </button> -->
  <div />
  <Title pageTitle={pageTitle.toUpperCase()} />
  <div />
  <!-- <button on:click={() => next()}>
    <i class="fas fa-chevron-right fa-lg" />
  </button> -->
  <!-- <i class="fas fa-chevron-right fa-lg" /> -->
</div>
<!-- {thisDay} -->
{#if addJob}
  <form on:submit={submit}>
    <div class="subtitle is-5 mb-1 mt-2">Date de la mission</div>
    <Input type="date" name="nom" bind:value={date} placeholder="nom" />
    <div class="subtitle is-5 mb-1 mt-2">Effectif de jour</div>
    <Select fieldZero="Chef de jour" list={workers} bind:value={chefJour} />
    <Select fieldZero="Agent de jour" list={workers} bind:value={agentJour} />
    <div class="subtitle is-5 mb-1 mt-2">Effectif de nuit</div>
    <Select fieldZero="Chef de nuit" list={workers} bind:value={chefNuit} />
    <Select fieldZero="Agent de Nuit" list={workers} bind:value={agentNuit} />
    <Button
      size="medium"
      Type="submit"
      variant="info mt-4 is-outlined "
      width="is-fullwidth">Enregistrer</Button
    >
  </form>
  {selected}
  {chefJour.toUpperCase()}
  {agentJour.toUpperCase()}
  {chefNuit.toUpperCase()}
  {agentNuit.toUpperCase()}
{:else}
  <!-- {#each jobs as { date, isFerie, chefJour, chefNuit, agentJour, agentNuit, _id }, idx} -->
  {#each newJobsList as { date, isFerie, chefJour, chefNuit, agentJour, agentNuit, _id }, idx}
    <NotifBar
      classes="is-{isFerie ? 'success' : 'light'}"
      on:remove={removeJob(_id)}
    >
      <div class="bar">
        <div class="date">
          {dateFormat(date, "DDD dd mmmm")}
        </div>
        <i class="fas fa-sun day fa-lg has-text-warning" />
        <div
          class="{chefJour.nom === 'inconnu' &&
            'has-text-danger'} has-text-weight-semibold daycom"
        >
          {chefJour.nom.toUpperCase()}
        </div>
        <div class="{agentJour.nom === 'inconnu' && 'has-text-danger'} dayoff">
          {agentJour.nom.toUpperCase()}
        </div>
        <!-- <div class="night"> -->
        <i class="fas fa-moon night fa-lg has-text-info" />
        <div
          class="{chefNuit.nom === 'inconnu' &&
            'has-text-danger'} has-text-weight-semibold nightcom"
        >
          {chefNuit.nom.toUpperCase()}
        </div>
        <div
          class="{agentNuit.nom === 'inconnu' && 'has-text-danger'} nightoff"
        >
          {agentNuit.nom.toUpperCase()}
        </div>
        <!-- </div> -->
      </div></NotifBar
    >
  {/each}
  <Button
    variant="info"
    size="large"
    width="fullwidth"
    on:click={() => (addJob = !addJob)}>Ajouter mission</Button
  >
  {#if !jobs.length}
    Pas encore de mission
  {/if}
{/if}

<style>
  .grid {
    display: grid;
    grid-template-columns: 1em 1fr 1em;
  }
  i {
    place-self: center center;
  }
  .bar {
    display: grid;
    grid-gap: 1em;
    place-content: center space-between;
    grid-template-columns: 1fr repeat(1, 1em 1fr);
    grid-template-areas:
      "date day daycom"
      "date day dayoff"
      "date night nightcom"
      "date night nightoff";
  }
  /* height: 5rem; */

  .date {
    grid-area: date;
    grid-row: span 4;
    align-self: start;
  }
  .day {
    grid-area: day;
    justify-self: end;
    align-self: start;
  }
  .daycom {
    grid-area: daycom;
    justify-self: start;
  }
  .dayoff {
    justify-self: start;
    grid-area: dayoff;
  }
  .night {
    align-self: start;
    grid-area: night;
    justify-self: end;
  }
  .nightoff {
    justify-self: start;
    grid-area: nightoff;
  }
  .nightcom {
    justify-self: start;
    grid-area: nightcom;
  }
  @media screen and (min-width: 960px) {
    .bar {
      border-radius: 8px;
      grid-template-columns: 1fr repeat(2, 1em 1fr);
      grid-template-areas:
        "date day daycom night nightcom"
        "date day dayoff night nightoff";
    }
    .date {
      grid-row: span 2;
    }
  }
</style>
