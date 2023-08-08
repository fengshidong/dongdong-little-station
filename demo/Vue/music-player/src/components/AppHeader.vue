<template>
  <div>
    <!-- <el-select v-model="allmusic" placeholder="Select" size="small">
      <el-option v-for="item in options" :key="item.singerId" :label="item.singerName" :value="item.singerName" />
    </el-select> -->
  </div>
</template>
<script setup>
const allmusic = defineProps(['allmusic'])
console.log(allmusic);
</script>
<style lang="scss" scoped></style>