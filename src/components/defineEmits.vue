<template>
  <div class="study-module">
    <div>study defineEmit</div>
    <div>
      <ElButton @click="defineEmited">defineEmit</ElButton>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
import { ElButton } from "element-plus";

const defineEmited = () => {
  // 第一个参数为父组件使用时@事件名
  emit("defineEmited", {
    data: "emiting i am coding",
  });
};

const emit = defineEmits<{
  (
    eventType: "defineEmited",
    params: {
      data: string;
    }
  ): string;
}>();
</script>

<style scoped>
</style>