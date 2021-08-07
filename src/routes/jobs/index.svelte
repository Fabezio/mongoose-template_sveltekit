<script>
    import { onMount } from "svelte";
    // import { workers } from "$lib/_store/workers";
    // import { jobs } from "$lib/_store/jobs";
    import Title from "$lib/Header/Title.svelte";
    import axios from "axios";
    // import { page } from "$app/stores";
    import Input from "$lib/Forms/Input.svelte";
    import Select from "$lib/Forms/Select.svelte";
    import Button from "$lib/Compos/Button.svelte";
    import NotifBar from "$lib/Compos/NotifBar.svelte";
    import { joursFeriés } from "$lib/joursferiés";

    // console.log(typeof joursFeriés);

    let addJob = false;
    let selected = ""; //temporaire

    // import {
    //     nom,
    //     prenom,
    //     email,
    //     phone,
    //     worker,
    //     workers,
    // } from "../store/worker";
    let date = "";
    let chefJour = "";
    let chefNuit = "";
    let agentJour = "";
    let agentNuit = "";
    // let jour = {};
    // let nuit = {};
    let job = {};
    let jobs = [];
    // import { url } from "../store/db";
    // const url = "http://localhost:3000/api/jobs/add";
    const url = "http://localhost:3000/api/jobs";
    const workersUrl = "http://localhost:3000/api/workers";
    let workers = [];
    // const list = [
    //     "moi",
    //     "toi",
    //     "le facteur",
    //     "le chat",
    //     "ta mère",
    //     "ta chatte",
    // ];
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
            chefJour,
            agentJour,
            chefNuit,
            agentNuit,
        };
        const response = axios.post(url + "/add", job);
        jobs = [...jobs, response.data];
    }
    const pageTitle = "Missions de jour";

    // let jobs = [];
    onMount(() => {
        fetchWorkers();
        fetchData();
    });
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
        <Input type="date" name="nom" bind:value={date} placeholder="nom" />
        <Select fieldZero="Chef de jour" list={workers} bind:value={chefJour} />
        <Select
            fieldZero="Agent de jour"
            list={workers}
            bind:value={agentJour}
        />
        <Select fieldZero="Chef de nuit" list={workers} bind:value={chefNuit} />
        <Select
            fieldZero="Agent de Nuit"
            list={workers}
            bind:value={agentNuit}
        />
        <Button
            size="medium"
            Type="submit"
            variant="warning"
            width="is-fullwidth">Enregistrer</Button
        >
        <!--
            <button class="button-medium" type="submit">Enregistrer</button> <br />

        -->
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

            {chefJour.toUpperCase()}
            {agentJour.toUpperCase()}
            {chefNuit.toUpperCase()}
            {agentNuit.toUpperCase()}
        </NotifBar>
        <!-- <div class="notification {isFerie ? 'is-success' : 'is-light'}  ">

            {date}

            {chefJour.toUpperCase()}
            {agentJour.toUpperCase()}
            {chefNuit.toUpperCase()}
            {agentNuit.toUpperCase()}

            <button on:click={removeJob(_id)} class="delete" />
        </div> -->
    {/each}
    <Button
        variant="info"
        size="large"
        width="fullwidth"
        on:click={() => (addJob = !addJob)}>Ajouter mission</Button
    >
    {#if !jobs}
        <!-- <button>Ajouter mission</button> -->
        Pas encore de mission
    {/if}
{/if}

<!-- <a class="button" href="jobs/add">Ajouter employé</a> -->
<style>
    /* i {
        font-size: 1.5rem;
        font-style: normal;
    } */
</style>
