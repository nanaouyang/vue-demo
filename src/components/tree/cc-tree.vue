<template>
  <div>
    <template v-for="node in treeData">
      <tree-node
        v-model="selected"
        :multiple="multiple"
        :key="node.id"
        :node-data="node"
      >
        <template #switcher-close>
          <slot name="switcher-close"></slot>
        </template>
        <template #switcher-open>
          <slot name="switcher-open"></slot>
        </template>
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
  components: {
    // icon: {
    //   props: ["name"],
    //   render(h) {
    //     return h("span", this.$slots[this.name]);
    //   },
    // },
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
