<template>
  <div>
    <template v-for="node in nodes">
      <node :tree-store="treeStore" :key="node.id" :node-data="node"></node>
    </template>
    {{ treeStore }}
  </div>
</template>

<script>
import TreeStore from "./tree-store";
import node from "./node";

export default {
  name: "tree",
  components: {
    node,
  },
  computed: {
    val() {
      return this.treeStore.getStringValue();
    },
    nodes() {
      return this.treeStore.getTreeData();
    },
  },
  data() {
    const treeStore = new TreeStore(this.dataSource, this.options);
    return {
      treeStore,
    };
  },
  created() {
    this.treeStore.setStringValue(this.value);
  },
  watch: {
    val(v) {
      this.$emit("input", v);
    },
  },
  props: {
    //数据配置
    options: {
      type: Object,
      default: () => {},
    },
    //双向绑定值
    value: {
      type: String,
    },
    //未转化的数据
    dataSource: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped></style>
