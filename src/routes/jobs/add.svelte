<script>
    import axios from "axios";
    import Input from "$lib/Forms/Input.svelte";
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
    const url = "http://localhost:3000/api/jobs/add";
    const workersUrl = "http://localhost:3000/api/workers";
    let workers = [];

    let full = false;
    function submit(e) {
        full = true;
        e.preventDefault();
        job = {
            date: date,
            // jour: {
            //     chef: chefJour,
            //     agent: agentJour,
            // },
            // nuit: {
            //     chef: chefNuit,
            //     agent: agentNuit,
            // },
        };
        const response = axios.post(url, job);
        jobs = [...jobs, response.data];
    }

    // $: if ($worker.email.value) console.log($worker.email.value);
    // let checked = false;
    // function checkThis(e) {
    //     console.log(e.target.value);
    //     checked = !checked;
    // }
    // console.log(checked);
</script>

<form on:submit={submit}>
    <Input type="date" name="nom" bind:value={date} placeholder="nom" /><br />
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

    <button class="button-medium" type="submit">Enregistrer</button> <br />
</form>

<!-- {#if $worker && full}
    {$worker.nom}
    {$worker.prenom}
    {$worker.phone}
    {$worker.email.value}
{:else}
    <small>no data yet</small>
{/if} -->

<!-- {@debug form} -->
