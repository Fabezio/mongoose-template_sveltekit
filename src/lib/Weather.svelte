<script>
    import { onMount } from "svelte";
    import https from "https";
    // import axios from "axios";
    const myApi = "f6f03d4b430d972622542e12b63f852d";
    const city = "boulogne-billancourt";
    // const path = `https://public.opendatasoft.com/api/datasets/1.0/search/?q=paris`;
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApi}&lang=fr&units=metric`;
    let weather;
    function fetchWeather() {
        weather = getWeatherData(path);

        async function getWeatherData(path) {
            const res = await fetch(path);
            const text = await res.json();
            console.log(text);

            if (res.ok) {
                return text;
            } else {
                throw new Error(text);
            }
        }
    }
    const size = 96;
    const bg = "info";
    const txt = "light";

    onMount(() => fetchWeather());
</script>

<!-- <h1>emplacement météo: {path}</h1> -->

{#if weather}
    {#await weather}
        <em>waiting...</em>
    {:then weather_data}
        <div id="main-bar" class="columns is-centered ">
            <div
                id="inside-main-column"
                class="card column is-5 has-background-{bg} "
            >
                <div id="twin-columns" class=" columns p-4">
                    <div id="left-column" class="column is-9 has-text-{txt} ">
                        <!-- {weather_data.weather[0].toString()} -->
                        <div
                            class="subtitle has-text-weight-bold has-text-{txt}"
                        >
                            Localité: {weather_data.name}
                        </div>
                        <!-- <div >dans 1h: {weather_data.dt}</div> -->
                        <div>
                            Aspect global: {weather_data.weather[0].description}
                        </div>
                        <div>
                            Température: {weather_data.main.temp} °C
                        </div>
                        <!-- {weather_data.weather[0].description} -->

                        <!-- {weather_data.weather[0].description} -->
                    </div>
                    <div class="rotate" />
                    <div id="right-column" class="column is-3 is-centered">
                        <figure class="image is-{size}x{size}">
                            <!-- <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"> -->
                            <img
                                src={`http://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`}
                                alt="logo"
                            />
                        </figure>
                    </div>
                </div>
                <div class="p-1 card-footer two-lines has-text-{txt}">
                    Pour de plus amples informations, veuillez consulter
                    <a
                        href="https://meteofrance.com/previsions-meteo-france/boulogne-billancourt/92100"
                        target="_blank"
                        class="has-text-success ml-1"
                    >
                        cette page</a
                    >
                </div>
            </div>
        </div>

        <!-- hi -->
    {:catch error}
        <em>{error}</em>
    {/await}
{/if}

<style>
    #twin-columns {
        border-radius: 7px !important;
    }
    .rotate {
        position: relative;
        right: 2rem;
        rotate: 90deg;
        border: 1px solid gray;
        opacity: 0.7;
    }
    .two-lines {
        height: 3rem;
    }
</style>
