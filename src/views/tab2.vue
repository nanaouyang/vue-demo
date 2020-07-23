<template>
  <div>
    <el-tabs v-model="name" :before-leave="beforeLeave" type="border-card">
      <el-tab-pane label="a" name="a">用户管理1</el-tab-pane>
      <el-tab-pane label="b" name="b">配置管理2</el-tab-pane>
      <el-tab-pane label="c" name="c">角色管理</el-tab-pane>
      <el-tab-pane label="d" name="d">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "tab1",
  data() {
    return {
      name: "a",
    };
  },
  methods: {
    beforeLeave(activeName) {
      console.log(activeName);
      return activeName < 1;
    },
  },
};
</script>

<style scoped></style>
