<template>
  <div>
    <el-tabs :before-leave="berforeLeave" type="border-card">
      <el-tab-pane label="a">用户管理</el-tab-pane>
      <el-tab-pane label="b">配置管理</el-tab-pane>
      <el-tab-pane label="c">角色管理</el-tab-pane>
      <el-tab-pane label="d">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "tab1",
  methods: {
    beforeLeave(activeName) {
      const arr = ["b", "c", "d"];
      return !arr.includes(activeName);
    },
  },
};
</script>

<style scoped></style>
