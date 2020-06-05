<template>
  <div>
    <div @click="visible = true"><slot></slot></div>
    <el-dialog title="提示" :visible.sync="visible" width="30%">
      <span>这是一段信息</span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "viModal",
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style scoped></style>
