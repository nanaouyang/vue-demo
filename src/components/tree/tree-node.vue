<template>
  <div>
    <span @click="isOpen = !isOpen" v-if="nodeData.children">
      <slot name="open-icon">
        {{ isOpen ? "-" : "" }}
      </slot>
      <slot name="hidden-icon">
        {{ isOpen ? "" : "+" }}
      </slot>
    </span>
    <input
      :id="nodeData.id"
      :value="nodeData.id"
      v-model="selected"
      v-if="multiple"
      type="checkbox"
    />
    <input
      :id="nodeData.id"
      v-model="selected"
      v-else
      type="radio"
      :value="nodeData.id"
    />
    <label :for="nodeData.id">{{ nodeData.label }}</label>
    <template v-if="isOpen">
      <template v-for="node in nodeData.children">
        <div :key="node.id" style="padding: 0 20px;">
          <tree-node
            v-model="selected"
            :multiple="multiple"
            :node-data="node"
          ></tree-node>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "tree-node",
  props: ["nodeData", "multiple", "value"],
  data() {
    return {
      isOpen: false,
      checked: false,
      selected: null,
    };
  },
  watch: {
    value: {
      handler(v) {
        this.selected = v;
      },
      immediate: true,
    },
    selected(v) {
      this.$emit("input", v);
    },
  },
};
</script>

<style lang="scss" scoped></style>
