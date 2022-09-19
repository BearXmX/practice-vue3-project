<template>
  <div class="study-module">
    <div>study defineProps</div>
    <div>props: {{ msg }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

// 定义了泛型就可以不定义括号里参数了
defineProps<{
  msg: string;
}>();
</script>

<style scoped>
</style>