<script>
  import { createEventDispatcher } from "svelte";
  export let classes;

  const dispatch = createEventDispatcher();
</script>

<div class="notification border {classes}">
  <!-- {_id} -->
  <slot />

  <button on:click={() => dispatch("remove")} class="delete" />
</div>

<style>
  .border {
    border-radius: 8px;
    border: 2px solid hsla(0, 50%, 0%, 0.3);
  }
</style>
