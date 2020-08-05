<template>
  <div>
    <input
      :id="nodeData[options.id]"
      v-model="val"
      v-if="!options.multiple && !nodeData.children"
      type="radio"
      :value="nodeData[options.value]"
    />
    <input
      :id="nodeData[options.id]"
      v-model="val"
      v-if="options.multiple"
      type="checkbox"
      :value="nodeData[options.value]"
    />
    <label :for="nodeData[options.id]">{{ nodeData[options.label] }}</label>
    <template v-for="node in nodeData.children">
      <node
        style="margin-left: 10px;"
        :tree-store="treeStore"
        :key="node.id"
        :node-data="node"
      ></node>
    </template>
  </div>
</template>

<script>
export default {
  name: "node",
  props: {
    nodeData: {
      type: Object,
      default: () => {},
    },
    treeStore: {
      default: () => {},
    },
  },
  computed: {
    val: {
      get() {
        return this.treeStore.getValue();
      },
      set(v) {
        this.treeStore.setValue(v);
      },
    },
    options() {
      return this.treeStore.getOptions();
    },
  },
};
</script>

<style lang="scss" scoped></style>
