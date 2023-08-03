<template>
  <div class="app">
    <MyHeader />
    <MyTodo />
    <MyList />
    <MyFooter />

  </div>
</template>

<script setup lang="ts">
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
import MyTodo from './components/MyTodo.vue';
import MyList from './components/MyList.vue';
</script>

<style scoped lang="scss">
.app {
  width: 600px;
  height: 300px;
  margin: 100px auto;
  padding: 10px;
  border: 1px solid #000;
}
</style>