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

    onMount(() => fetchWeather());
</script>

<!-- <h1>emplacement météo: {path}</h1> -->

{#if weather}
    {#await weather}
        <em>waiting...</em>
    {:then weather_data}
        <div>
            <!-- {weather_data.weather[0].toString()} -->
            <div>
                Localité: {weather_data.name}
            </div>
            <div>
                Aspect global: {weather_data.weather[0].description}
            </div>
            <div>
                Température: {weather_data.main.temp} °C
            </div>
            <!-- {weather_data.weather[0].description} -->

            <img
                src={`http://openweathermap.org/img/wn/${weather_data.weather[0].icon}@2x.png`}
                alt="logo"
            />

            <!-- {weather_data.weather[0].description} -->
        </div>
        <!-- hi -->
    {:catch error}
        <em />
    {/await}
{/if}
