<script>
    import { onMount } from "svelte";
    import Title from '$lib/Header/Title.svelte'
    import axios from "axios";
import { page } from "$app/stores";
    const pageTitle = "Missions de jour";

    const url = "http://localhost:3000/api/jobs";
    let jobs = [];
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

{#each jobs as { date, jour, nuit, _id }, idx}
    <div class="notification  is-{idx % 2 === 0 ? 'primary' : 'info'}">
        {date}
        {jour.chef}
        {jour.agent}
        {nuit.chef}
        {jour.agent}

        <button on:click={removeJob(_id)} class="delete" />
    </div>
{/each}
<a href="jobs/add">Ajouter mission</a>
{#if !jobs}
    <!-- <button>Ajouter mission</button> -->
    Pas encore de mission
{/if}
<!-- <a class="button" href="jobs/add">Ajouter employé</a> -->
