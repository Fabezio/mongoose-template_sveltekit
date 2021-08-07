<script>
    import { onMount } from "svelte";
    import Title from "$lib/Header/Title.svelte";
    // import { workers } from "$lib/_store/workers";
    import axios from "axios";

    import Input from "$lib/Forms/Input.svelte";
    import Button from "$lib/Compos/Button.svelte";
    import NotifBar from "$lib/Compos/NotifBar.svelte";
    let addWorker = false;
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
    // const url = "http://localhost:3000/api/workers/add";
    const url = "http://localhost:3000/api/workers";
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
        const response = axios.post(url + "/add", worker);
        workers = [...workers, response.data];
        addWorker = false;
        return workers;
    }
    const pageTitle = "Liste des employés";

    // let workers = [];
    onMount(() => fetchData());
    async function fetchData() {
        const { data } = await axios.get(url);
        workers = data;
    }
    async function removeWorker(id) {
        const response = await axios.delete(`${url}/${id}`);
        if (response.data.id === id) {
            workers = workers.filter((w) => w.id !== id);
        }
    }
    async function updateWorker() {
        alert("update me!");
    }
    // console.log(addWorker);
</script>

<Title {pageTitle} />
<!-- 
<svelte:head>
    <title>Planning | {title}</title>
</svelte:head>

<h1>{title}</h1> -->
{#if addWorker}
    <form on:submit={submit}>
        <Input type="text" name="nom" bind:value={nom} placeholder="nom" /><br
        />
        <Input
            type="text"
            name="prenom"
            bind:value={prenom}
            placeholder="prenom"
        />
        <Input type="tel" name="phone" bind:value={phone} placeholder="phone" />
        <Input
            type="email"
            name="email"
            bind:value={email}
            placeholder="email"
        />
        <Button
            size="medium"
            Type="submit"
            width="is-fullwidth"
            variant="warning">Enregistrer</Button
        >
        <!--

            <button class="button-medium" type="submit">Enregistrer</button> <br />
        -->
    </form>
{:else}
    {#each workers as { nom, prenom, phone, email, _id }, idx}
        <NotifBar
            classes="is-{idx % 2 === 0 ? 'primary' : 'info'}"
            on:remove={removeWorker(_id)}
        >
            <!-- <div class="notification  is-{idx % 2 === 0 ? 'primary' : 'info'}"> -->
            {nom}
            {prenom}
            {phone}
            {email}
            <!-- <button on:click={removeWorker(_id)} class="delete" />
        </div> -->
        </NotifBar>
    {/each}
    <Button
        variant="success"
        size="large"
        width="is-fullwidth"
        on:click={() => (addWorker = !addWorker)}>Ajouter employé</Button
    >
    <!-- <button class="button" on:click={() => (addWorker = !addWorker)}
        >Ajouter employé</button
    > -->
{/if}
