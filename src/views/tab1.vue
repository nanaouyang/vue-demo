<template>
  <div>
    <el-tabs :before-leave="berforeLeave" type="border-card">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { reactive, computed, ref } from "@vue/composition-api";
export default {
  name: "tab1",
  setup() {
    const test = ref("11111");
    const state = reactive({
      todoList: ["123123123", "sadasdasdsa"],
      count: 0,
      double: computed(() => state.count * 2),
    });

    function increment() {
      state.todoList = [...state.todoList, "3213123"];
    }
    function console() {
      window.console.log(test.value);
    }
    return {
      test,
      state,
      increment,
      console,
    };
  },
};
</script>

<style scoped></style>
