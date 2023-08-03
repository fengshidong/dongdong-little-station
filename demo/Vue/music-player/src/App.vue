<template>
  <div class="box">
    <AppHeader :allmusic="allmusic" />
    <AppMain />
    <AppFooter />
  </div>
</template>

<script setup>
import allmusic from './state/allmusic.js';
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppMain from './components/AppMain.vue'
console.log(allmusic);
</script>

<style lang="scss" scoped>
.box {
  width: 600px;
  height: 400px;
  margin: 100px auto;
  border: 1px solid #000;
}
</style>