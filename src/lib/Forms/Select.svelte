<script>
  export let value;
  export let list;
  export let fieldZero;
  // console.log(list);
</script>

<div class="select">
  <select bind:value>
    <option>{fieldZero}</option>
    {#each list as { nom }}
      <option value={nom}>{nom.toUpperCase()}</option>
    {/each}
  </select>
</div>
