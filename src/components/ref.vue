<script setup lang="ts">
import { ref } from "vue";
import { ElButton } from "element-plus";

const count = ref<number>(1);
</script>
  
<template>
  <div class="study-module">
    <div>study ref</div>
    <div><ElButton @click="count++">ref count</ElButton></div>
    <div>计数：{{ count }}</div>
  </div>
</template>
  
<style scoped>
</style>