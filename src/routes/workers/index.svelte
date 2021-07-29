<script>
    import { onMount } from "svelte";
    import axios from "axios";
    const title = "Liste des employés";

    const url = "http://localhost:3000/api/workers";
    let workers = [];
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
</script>

<svelte:head>
    <title>Planning | {title}</title>
</svelte:head>

<h1>{title}</h1>

{#each workers as { nom, prenom, phone, email, _id }, idx}
    <div class="notification  is-{idx % 2 === 0 ? 'primary' : 'info'}">
        {nom}
        {prenom}
        {phone}
        {email}
        <button on:click={removeWorker(_id)} class="delete" />
    </div>
{/each}
<a class="button" href="workers/add">Ajouter employé</a>
