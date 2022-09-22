<template>
  <div class="study-module">
    <div>slot</div>
    <div>↓ 这里一下是插槽的内容 ↓</div>
    <div>
      <slot></slot>
      <slot name="name"></slot>
      <slot name="scope" :itemProps="{ name: 'heihei', age: 24 }"></slot>
    </div>
  </div>
</template>

<script setup lang='ts'>
const a = 111;
</script>

<style scoped lang='less'>
</style>