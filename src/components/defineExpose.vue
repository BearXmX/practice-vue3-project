<template>
  <div class="study-module">
    <div>study defineExpose</div>
    <div>
      <slot name="btn"></slot>
    </div>
    <div>
      <slot name="message"></slot>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineExpose, reactive } from "vue";

const message = reactive<{
  message: string;
}>({
  message: "up and down",
});

const postMessage = () => {
  return message;
};

defineExpose({
  postMessage,
});
</script>

<style scoped lang='less'>
</style>