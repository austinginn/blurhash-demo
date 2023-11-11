<script setup>
import { ref, onMounted } from 'vue';
import iconMap from '../composables/iconMap.js';

const weatherIcon = ref(null);
const temperature = ref(null);
const shortForecast = ref(null);

let latitude = null;
let longitude = null;

checkGeo();


function checkGeo() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            await getWeather(latitude, longitude);
        });
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}

//using api.weather.gov
async function getWeather(latitude, longitude) {
    const url = `https://api.weather.gov/points/${latitude},${longitude}`;
    const response = await fetch(url);
    const data = await response.json();
    const forecastUrl = data.properties.forecast;
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();
    //parse icon from forecastData.properties.periods[0].icon
    const iconUrl = new URL(forecastData.properties.periods[0].icon);
    const pathname = iconUrl.pathname;
    const iconName = pathname.split('/')[4].split(',')[0];
    const dayNight = pathname.split('/')[3];
    weatherIcon.value = iconMap[dayNight][iconName].icon;

    //set the other refs
    temperature.value = forecastData.properties.periods[0].temperature;
    shortForecast.value = forecastData.properties.periods[0].shortForecast;
    document.querySelector('#weather').style.opacity = "1";
    document.querySelector('#temperature').style.opacity = "1";
    return;
}

</script>

<template>
    <div id="temperature">
        <span>{{ temperature }}°</span>
    </div>
    <div id="weather">
        <i :class="weatherIcon"></i>
    </div>
</template>

<style scoped>
#weather {
    display: inline-block;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

#temperature {
    display: inline-block;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

#temperature span {
    font-size: 25px;
    padding-right: 6px;
}

#weather i {
    font-size: 30px;
    padding-right: 10px;
}
</style>
