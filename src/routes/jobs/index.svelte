<script>
    import { onMount } from "svelte";
    import Title from "$lib/Header/Title.svelte";
    import axios from "axios";
    // import { page } from "$app/stores";
    import Input from "$lib/Forms/Input.svelte";
    import Button from "$lib/Compos/Button.svelte";
    import { joursFeriés } from "$lib/joursferiés";

    // console.log(typeof joursFeriés);

    let addJob = false;

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
    onMount(() => fetchData());
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

        <Input
            type="text"
            name="chefJour"
            bind:value={chefJour}
            placeholder="chef de jour: "
        />
        <Input
            type="text"
            name="agentJour"
            bind:value={agentJour}
            placeholder="agent de jour: "
        />
        <Input
            type="text"
            name="chefNuit"
            bind:value={chefNuit}
            placeholder="chef de nuit: "
        />
        <Input
            type="text"
            name="agentNuit"
            bind:value={agentNuit}
            placeholder="agent de nuit: "
        />

        <!-- <Input
        type="text"
        name="prenom"
        bind:value={prenom}
        placeholder="prenom"
    /><br />
    <Input type="tel" name="phone" bind:value={phone} placeholder="phone" /><br
    />
    <Input
        type="email"
        name="email"
        bind:value={email}
        placeholder="email"
    /><br /> -->
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
{:else}
    {#each jobs as { date, isFerie, chefJour, chefNuit, agentJour, agentNuit, _id }, idx}
        <div class="notification {isFerie ? 'is-success' : 'is-light'}  ">
            <!-- {_id} -->
            {date}
            <!-- <span class= -->
            {chefJour}
            {agentJour}
            {chefNuit}
            {agentNuit}

            <button on:click={removeJob(_id)} class="delete" />
        </div>
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
