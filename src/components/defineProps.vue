<template>
  <div class="study-module">
    <div>study defineProps</div>
    <div>
      <ElButton @click="getProps">defineProps</ElButton>
    </div>
    <div>props: {{ msg }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const getProps = () => {
  console.log(props);
};

// 定义了泛型就可以不定义括号里参数了
const props = defineProps<{
  msg: string;
}>();
</script>

<style scoped>
</style>