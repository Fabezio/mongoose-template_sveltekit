<script>
    import { createEventDispatcher } from "svelte";
    export let classes;

    const dispatch = createEventDispatcher();
</script>

<div class="notification {classes}">
    <!-- {_id} -->
    <slot />

    <button on:click={() => dispatch("remove")} class="delete" />
</div>
