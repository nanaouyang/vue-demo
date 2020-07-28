<template>
  <div>
    <span @click="handleClick" v-if="nodeData.children">
      <span v-if="isOpen">
        <slot name="switcher-close"></slot>
      </span>
      <span v-else>
        <slot name="switcher-open"></slot>
      </span>
    </span>
    <input
      ref="box"
      :id="nodeData[options.id]"
      :value="nodeData[options.value]"
      v-model="selected"
      v-if="multiple"
      type="checkbox"
    />
    <input
      :id="nodeData[options.id]"
      v-model="selected"
      v-if="!multiple && !nodeData.children"
      type="radio"
      :value="nodeData[options.value]"
    />
    <label :for="nodeData[options.id]">
      <slot :nodeData="nodeData">{{ nodeData[options.label] }}</slot>
    </label>
    <div v-show="isOpen">
      <template v-for="node in nodeData.children">
        <div :key="node[options.key]" style="padding: 0 20px;">
          <tree-node
            :options="options"
            :deep="deep + 1"
            v-model="selected"
            :multiple="multiple"
            :node-data="node"
          >
            <template #switcher-close>
              <slot name="switcher-close"></slot>
            </template>
            <template #switcher-open>
              <slot name="switcher-open"></slot>
            </template>
            <template #default="{nodeData}">
              <slot :nodeData="nodeData"></slot>
            </template>
          </tree-node>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "tree-node",
  props: ["nodeData", "multiple", "value", "deep", "options"],
  components: {
    treeNode: () => import("./tree-node"),
  },
  data() {
    return {
      isOpen: false,
      selected: null,
    };
  },
  mounted() {
    //默认展开单选已选
    if (!this.multiple && this.nodeData[this.options.id] === this.value) {
      let parent = this.$parent;
      while (parent.deep !== 0) {
        parent.isOpen = true;
        parent = parent.$parent;
      }
    }
    //默认展开多选已选
    if (this.multiple && this.value.includes(this.nodeData[this.options.id])) {
      let parent = this.$parent;
      while (parent.deep !== 0) {
        parent.isOpen = true;
        parent = parent.$parent;
      }
    }
  },
  methods: {
    //递归关闭
    closeNode(parent) {
      parent.$children.forEach((item) => {
        if (
          item.nodeData &&
          item.nodeData[this.options.id] !== this.nodeData[this.options.id]
        ) {
          item.isOpen = false;
        }
        if (item.$children.length) {
          this.closeNode(item);
        }
      });
    },
    //点击关闭打开
    handleClick() {
      if (this.$parent.$children.some((item) => item.isOpen === false)) {
        this.closeNode(this.$parent);
      }
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    selected(v) {
      this.$emit("input", v);
    },
    value: {
      //默认展开已选项
      handler(v) {
        this.selected = v;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
