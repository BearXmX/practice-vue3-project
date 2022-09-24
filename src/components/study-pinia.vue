<template>
  <div class="study-module">
    <div>study-pinia</div>
    <div>
      <ElButton @click="clickPiniaCounter">click pinia counter</ElButton>
    </div>
    <div>piniaCounter：{{ counterStore.count }}</div>
  </div>
</template>

<script setup lang='ts'>
import { ElButton } from "element-plus";
import useCounterStore from "../store/counter";

const counterStore = useCounterStore();

interface IFuncProps {
  (): void;
  a: number;
  b: string;
}

const func: IFuncProps = () => {};

func.a = 1;
func.b = "1";

const clickPiniaCounter = () => {
  /** @use dispatch store */
  // counterStore.count++

  // counterStore.$patch({count: counter.count + 1})

  // counterStore.increment()

  counterStore.increment();

  /** @use getter store */

  console.log(counterStore.doubleCount);
};
</script>

<style scoped lang='less'>
</style>