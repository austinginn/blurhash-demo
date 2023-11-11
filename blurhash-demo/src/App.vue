<script setup>
import Background from './components/Background.vue';
import Clock from './components/Clock.vue';
import Weather from './components/Weather.vue';
</script>

<template>
  <Background />
  <div id="bottom-right">
    <Clock id="clock" />
  </div>
  <div id="bottom-left">
    <Weather id="weather" />
  </div>
</template>

<style scoped>
/*  */

#bottom-right {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  padding: 3rem;
}
#bottom-left {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  padding: 3rem;
}

</style>
