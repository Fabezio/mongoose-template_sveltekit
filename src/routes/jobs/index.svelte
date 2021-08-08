<script>
    import { onMount } from "svelte";
    import axios from "axios";

    import Title from "$lib/Header/Title.svelte";
    import Input from "$lib/Forms/Input.svelte";
    import Select from "$lib/Forms/Select.svelte";
    import Button from "$lib/Compos/Button.svelte";
    import NotifBar from "$lib/Compos/NotifBar.svelte";
    import { joursFeriés } from "$lib/joursferiés";

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
    }
    const pageTitle = "Missions de jour";

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
        jobs = data;
    }
    async function removeJob(id) {
        const response = await axios.delete(`${url}/${id}`);
        if (response.data.id === id) {
            jobs = jobs.filter((w) => w.id !== id);
        }
    }
</script>

<Title {pageTitle} />

{#if addJob}
    <form on:submit={submit}>
        <div class="subtitle is-5 mb-1 mt-2">Date de la mission</div>
        <Input type="date" name="nom" bind:value={date} placeholder="nom" />
        <div class="subtitle is-5 mb-1 mt-2">Effectif de jour</div>
        <Select fieldZero="Chef de jour" list={workers} bind:value={chefJour} />
        <Select
            fieldZero="Agent de jour"
            list={workers}
            bind:value={agentJour}
        />
        <div class="subtitle is-5 mb-1 mt-2">Effectif de nuit</div>
        <Select fieldZero="Chef de nuit" list={workers} bind:value={chefNuit} />
        <Select
            fieldZero="Agent de Nuit"
            list={workers}
            bind:value={agentNuit}
        />
        <Button
            size="medium"
            Type="submit"
            variant="info mt-4 is-outlined "
            width="is-fullwidth">Enregistrer</Button
        >
    </form>
    {selected}
    {chefJour}
    {agentJour}
    {chefNuit}
    {agentNuit}
{:else}
    {#each jobs as { date, isFerie, chefJour, chefNuit, agentJour, agentNuit, _id }, idx}
        <NotifBar
            classes="is-{isFerie ? 'success' : 'light'}"
            on:remove={removeJob(_id)}
        >
            {date}

            {chefJour.nom}
            {agentJour.nom}
            {chefNuit.nom}
            {agentNuit.nom}
        </NotifBar>
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
