<template>
  <div>
    {{ nodes }}
    <template v-for="node in nodes">
      <node :tree-store="treeStore" :key="node.id" :node-data="node"></node>
    </template>
  </div>
</template>

<script>
import TreeStore from "./tree-store";
// import Dep from "./dep";
import node from "./node";
// const dep = new Dep();
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
    // dep.add(this.update(this.val));
  },
  watch: {
    val(v) {
      // dep.notify(v);
      this.$emit("input", v);
    },
  },
  methods: {
    // update(v) {
    //   this.$emit("input", v);
    // },
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
