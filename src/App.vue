<script setup lang="ts">
import { ref } from "vue";
import { ElButton } from "element-plus";
import RefComponent from "./components/ref.vue";
import ReactiveComponent from "./components/reactive.vue";
import DefineProps from "./components/defineProps.vue";
import DefineEmit from "./components/defineEmits.vue";
import DefineExport from "./components/defineExpose.vue";

import type { DefineComponent } from "vue";
/** @use 使用component :is 按钮类型 */
type btnIsComponentInstanceType = ["studyRef", "studyReactive"];
/** @use 使用标签组件 按钮类型 */
type btnNotIsComponentInstanceType = [
  "studyDefineProps",
  "studyDefineEmits",
  "studyExpose"
];

/** @use 使用component :is 按钮数据 */
const btnIsComponentInstance: btnIsComponentInstanceType = [
  "studyRef",
  "studyReactive",
];
/** @use 使用标签组件 按钮数据 */
const btnNotIsComponentInstance: btnNotIsComponentInstanceType = [
  "studyDefineProps",
  "studyDefineEmits",
  "studyExpose",
];

/** @use 使用component :is 展示判断排他 */
const isComponentType = ref<btnIsComponentInstanceType[number]>("studyRef");

/** @use 使用标签组件 展示判断排他 */
const notIsComponentType =
  ref<btnNotIsComponentInstanceType[number]>("studyDefineProps");

/** @use 使用component :is 组件匹配 */
const showIsComponent: Record<
  btnIsComponentInstanceType[number],
  DefineComponent
> = {
  studyRef: RefComponent as DefineComponent,
  studyReactive: ReactiveComponent as DefineComponent,
};

/** @use 是否隐藏component :is 组件 */
const hideIsComponent = ref<boolean>(false);

/** @use 父组件传的事件触发的回调 */
const defineEmits = (params: { data: string }) => {
  console.log(params);
};

const studyExposeRef = ref<{
  postMessage: () => { message: string };
} | null>(null);

const clickStudyExposeRef = () => {
  console.log(studyExposeRef.value?.postMessage().message);
};
</script>

<template>
  <div class="module-style">
    <div style="margin-bottom: 20px">
      <ElButton
        type="primary"
        v-for="item in btnIsComponentInstance"
        @click="
          isComponentType = item;
          hideIsComponent = false;
        "
        >{{ item }}</ElButton
      >
      <ElButton
        type="success"
        v-for="item in btnNotIsComponentInstance"
        @click="
          notIsComponentType = item;
          hideIsComponent = true;
        "
        >{{ item }}</ElButton
      >
    </div>
    <div
      style="padding-top: 20px; border-top: 1px solid #91d5ff"
      v-if="
        btnIsComponentInstance.includes(isComponentType) && !hideIsComponent
      "
    >
      <component :is="showIsComponent[isComponentType]"></component>
    </div>
    <div style="padding-top: 20px; border-top: 1px solid #91d5ff" v-else>
      <DefineProps
        v-if="notIsComponentType === 'studyDefineProps'"
        msg="i am props"
      ></DefineProps>
      <DefineEmit
        v-if="notIsComponentType === 'studyDefineEmits'"
        @defineEmits="defineEmits"
      >
        <template v-slot>
          <span>i am coding</span>
        </template>
      </DefineEmit>
    </div>
    <DefineExport
      v-if="notIsComponentType === 'studyExpose'"
      ref="studyExposeRef"
    >
      <template #btn>
        <ElButton @click="clickStudyExposeRef">click me get ref</ElButton>
      </template>
      <template #message>
        <span>receiveMessage: {{ studyExposeRef?.postMessage().message }}</span>
      </template>
    </DefineExport>
  </div>
</template>

<style scoped>
</style>
