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
    let nom = "";
    let prenom = "";
    let phone = "";
    let email = "";
    let worker = {};
    let workers = [];
    // import { url } from "../store/db";
    const url = "http://localhost:3000/api/workers/add";
    let full = false;
    function submit(e) {
        full = true;
        e.preventDefault();
        worker = {
            nom: nom,
            prenom: prenom,
            phone: phone,
            email: email.value,
        };
        const response = axios.post(url, worker);
        workers = [...workers, response.data];
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
    <Input type="text" name="nom" bind:value={nom} placeholder="nom" /><br />
    <Input
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
    /><br />

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
