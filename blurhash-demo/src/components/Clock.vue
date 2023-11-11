<template>
    <div id="clock">
        <h1>{{ timeNoSeconds }}<span id="ampm">{{ ampm }}</span></h1>
        <h2>{{ dayOfWeek }}, {{ month }} {{ dayOfMonth }}</h2>
    </div>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

let date = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec']

//create clock
const time = ref(date.toLocaleTimeString());
const dayOfWeek = ref(daysOfWeek[date.getDay()]);
const dayOfMonth = ref(date.getDate());
const month = ref(months[date.getMonth()]);


const ampm = computed(() => {
    if (date.getHours() > 12) {
        return 'pm';
    } else {
        return 'am';
    }
});

console.log(date.getMonth());

//run clock every minute
onMounted(() => {
    //fade in clock but wait 1 second
    setTimeout(() => {
        document.querySelector('#clock').style.opacity = "1";
    }, 1000);
    setInterval(() => {
        date = new Date();
        time.value = date.toLocaleTimeString();
        dayOfWeek.value = daysOfWeek[date.getDay()];
        dayOfMonth.value = date.getDate();
        month.value = months[date.getMonth()];
    }, 60000);
});

//remove seconds from clock
const timeNoSeconds = computed(() => {
    return time.value.slice(0, -6);
});

</script>

<style scoped>
#clock {
    display: inline-block;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

#clock h1 {
    margin: 0;
    padding: 0;
    font-size: 23px;
    font-weight: bold;
    text-align: left;
}

#clock h2 {
    margin: 0;
    padding: 0;
    font-size: 15px;
}

#ampm {
    font-size: 15px;
}
</style>