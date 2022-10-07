<template>
  <div class="study-module">
    <div>env: {{ env }}</div>
    <div></div>
    <div></div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
console.log(import.meta.env);

const env = ref<string>(import.meta.env.VITE_NODE_ENV);
</script>

<style scoped lang='less'>
</style>