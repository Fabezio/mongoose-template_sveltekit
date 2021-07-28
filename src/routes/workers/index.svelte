<script>
    import { onMount } from "svelte";
    import axios from "axios";

    const url = "http://localhost:3000/api/workers";
    let items = [];
    async function fetchData() {
        const { data } = await axios.get(url);
        items = data;
    }
    onMount(() => fetchData());
</script>

<h1>Liste des employés</h1>
{#each items as { nom, prenom, phone, email }, idx}
    <div class="notification is-{idx % 2 === 0 ? 'primary' : 'info'}">
        {nom}
        {prenom}
        {phone}
        {email}
        <button class="delete" />
    </div>
{/each}
