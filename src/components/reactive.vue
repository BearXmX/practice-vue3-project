<script setup lang="ts">
import { reactive } from "vue";
import { ElButton } from "element-plus";

const countObj = reactive<{
  a: number;
}>({
  a: 1,
});
</script>
    
  <template>
  <div class="study-module">
    <div>study reactive</div>
    <div><ElButton @click="countObj.a++">reactive countObj</ElButton></div>
    <div>计数：{{ countObj.a }}</div>
  </div>
</template>
    
    <style scoped>
</style>