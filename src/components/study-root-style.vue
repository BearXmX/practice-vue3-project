<template>
  <div class="root-module">
    <div style="font-weight: bold">study root style</div>
    <div style="margin-top: 16px">
      <ElButton @click="changeTheme">{{ themeText }} theme</ElButton>
    </div>
    <div style="margin-top: 16px" class="default-color">
      random change root color
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import { ElButton } from "element-plus";

const themeText = ref<"light" | "dark">("light");

const color16 = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  return color;
};

const changeTheme = () => {
  const theme = document.documentElement.getAttribute("theme");

  document.documentElement.setAttribute(
    "theme",
    !theme || theme === "light" ? "dark" : "light"
  );

  const style = document.querySelector(
    "#default-root-style"
  ) as HTMLStyleElement;

  style.textContent = `
    :root {
      --default: ${color16()};
    }
  `;

  themeText.value = theme === "light" ? "dark" : "light";
};
</script>

<style scoped lang='less'>
</style>