<template>
  <div>
    <div @click="visible = true"><slot></slot></div>
    <slot :slotProps="visible" name="test1"></slot>
    <el-dialog title="提示" :visible.sync="visible" width="30%">
      <span>这是一段信息</span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ViModal",
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style scoped></style>
