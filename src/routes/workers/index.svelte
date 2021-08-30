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
    <Input type="text" name="nom" bind:value={nom} placeholder="nom" />
    <Input type="text" name="prenom" bind:value={prenom} placeholder="prenom" />
    <Input type="tel" name="phone" bind:value={phone} placeholder="phone" />
    <Input type="email" name="email" bind:value={email} placeholder="email" />
    <Button
      on:click={() => console.log("enregistrement en cours...")}
      size="medium"
      Type="submit"
      width="is-fullwidth"
      variant="info mt-4 is-outlined">Enregistrer</Button
    >
    <!--

            <button class="button-medium" type="submit">Enregistrer</button> <br />
        -->
  </form>
{:else}
  {#if workers.length > 7}
    <Button
      variant="info mt-4 is-outlined"
      size="large"
      width="is-fullwidth"
      on:click={() => (addWorker = !addWorker)}>Ajouter employé</Button
    >
    <br />
    <table class="table is-bordered is-striped has-text-centered ">
      <thead>
        <tr class="is-uppercase ">
          <!-- <th>date</th> -->
          <th>nom</th>
          <th>prenom</th>
          <th>téléphone</th>
          <th>email</th>
          <th colspan="3">actions</th>
        </tr>
      </thead>
      <tbody>
        {#each workers as { nom, prenom, phone, email, _id }, idx}
          <tr class="p-0 m-0">
            <!-- <td>{date}</td> -->
            <td class="is-uppercase">{nom}</td>
            <td class="is-capitalized">{prenom}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td
              ><tag
                class="button  is-danger is-inverted"
                on:click={removeWorker(_id)}><i class="fas fa-eraser" /></tag
              ></td
            >
            <td
              ><tag
                class="button  is-info is-inverted"
                on:click={() => alert("detail")}
                title="detail"><i class="fas fa-eye" /></tag
              ></td
            >
            <td
              ><tag
                class="button  is-primary is-inverted"
                on:click={() => alert("modifier")}
                title="edit"><i class="fas fa-pen" /></tag
              ></td
            >
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}

  <Button
    variant="info mt-4 is-outlined"
    size="large"
    width="is-fullwidth"
    on:click={() => (addWorker = !addWorker)}>Ajouter employé</Button
  >

  <br />

  <!-- {#each workers as { nom, prenom, phone, email, _id }, idx}
        <NotifBar
            classes="is-{idx % 2 === 0 ? 'primary' : 'info'}"
            on:remove={removeWorker(_id)}
        >
            
            {nom}
            {prenom}
            {phone}
            {email}
           
        </NotifBar>
    {/each} -->

  <!-- <button class="button" on:click={() => (addWorker = !addWorker)}
        >Ajouter employé</button
    > -->
{/if}
