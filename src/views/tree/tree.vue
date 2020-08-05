<template>
  <div>
    {{ treeStore }}
    <template v-for="node in nodes">
      <node :tree-store="treeStore" :key="node.id" :node-data="node"></node>
    </template>
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
    this.treeStore.setValue(this.value);
  },
  watch: {
    val(v) {
      this.$emit("input", v);
    },
  },
  props: {
    options: {
      type: Object,
      default: () => {},
    },
    value: {
      type: String,
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped></style>
