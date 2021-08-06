<script>
    import { createEventDispatcher } from "svelte";
    export let size = "";
    export let width = "";
    export let variant;
    export let tone = "";
    export let Type = "";
    const dispatch = createEventDispatcher();
</script>

{#if Type === "submit"}
    <button
        on:click={() => dispatch("submit")}
        type="submit"
        class="button is-{variant} {size && `is-${size}`} {width &&
            'is-fullwidth'} {tone && tone} "
    >
        <!--

    <button type="submit" class="button is-{variant}">
-->
        <slot />
    </button>
{:else}
    <button
        on:click={() => dispatch("click")}
        class="button is-{variant} {size && `is-${size}`} {width &&
            'is-fullwidth'} {tone && 'is-light'} "
    >
        <!--

        <button class="button is-{variant}">
    -->
        <slot />
    </button>
{/if}
