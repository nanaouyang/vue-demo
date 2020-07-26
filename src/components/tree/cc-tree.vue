<template>
  <div>
    <template v-for="node in treeData">
      <tree-node
        v-model="selected"
        :multiple="multiple"
        :key="node.id"
        :node-data="node"
      >
      </tree-node>
    </template>
  </div>
</template>

<script>
import { Tree } from "coms";

export default {
  name: "cc-tree",
  props: ["dataSource", "multiple", "value"],
  data() {
    return {
      selected: this.value,
    };
  },
  watch: {
    selected(v) {
      this.$emit("input", v);
    },
    value: {
      handler(v) {
        this.selected = v;
      },
      immediate: true,
    },
  },
  computed: {
    treeData() {
      return Tree.list2tree({ list: this.dataSource });
    },
  },
  methods: {},
};
</script>

<style scoped></style>
