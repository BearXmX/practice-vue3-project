<template>
  <div class="study-module">
    <div>study defineEmits</div>
    <div>
      <ElButton @click="defineEmited">defineEmits</ElButton>
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
  emit("defineEmits", {
    data: "emiting i am coding",
  });
};

const emit = defineEmits<{
  (
    eventType: "defineEmits",
    params: {
      data: string;
    }
  ): string;
}>();
</script>

<style scoped>
</style>