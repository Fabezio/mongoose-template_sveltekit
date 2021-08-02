<script>
    import { onMount } from "svelte";
    let date = new Date();
    const formatter = Intl.DateTimeFormat("fr", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    onMount(() => {
        const interval = setInterval(() => {
            date = new Date();
            return date;
        }, 1000);

        return () => cleanInterval(interval);
    });
</script>

<div class="has-text-light navbar-item">{formatter.format(date)}</div>
