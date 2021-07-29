<script>
    // export let err;
    export let placeholder;
    export let name;
    export let value;
    export let type = "text";
    let change = false;
    let err = false;
    // console.log(value.length);
    $: if (value.length) change = true;
    $: if (!value.length && change) err = true;
    // $: type
    // export let form
</script>

{#if type === "text"}
    <input
        class="input is-{!err ? 'primary' : 'danger'}"
        type="text"
        bind:value
        {placeholder}
        {name}
    />
{:else if type === "tel"}
    <input
        class="input is-{!err ? 'primary' : 'danger'}"
        type="tel"
        bind:value
        {placeholder}
        {name}
    />
{:else if type === "email"}
    <input
        class="input is-{!err ? 'primary' : 'danger'}"
        type="email"
        bind:this={value}
        {placeholder}
        {name}
    />
{:else if type === "date"}
    <input
        class="input is-{!err ? 'primary' : 'danger'}"
        type="date"
        bind:this={value}
        {placeholder}
        {name}
    />
{/if}
{#if change && err}
    <small>{err}</small>
{:else if change}
    <small>{value}</small>
{/if}
