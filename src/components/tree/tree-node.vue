<template>
  <div>
    <span @click="handleClick" v-if="nodeData.children">
      <span v-if="isOpen">
        <!--        <div ref="icona"></div>-->
        <slot name="switcher-close"></slot>
        <!--        <icon name="switcher-close"></icon>-->
        <!--          <template #switcher-close>-->
        <!--            11-->
        <!--          </template>-->
        <!--        </icon>-->
        <!--        </slot>-->
      </span>
      <span v-else>
        <slot name="switcher-open"></slot>
        <!--        <icon name="switcher-close"></icon>-->
        <!--          <template #switcher-close>-->
        <!--            222-->
        <!--          </template>-->
        <!--        </icon>-->
        <!--        </slot>-->
      </span>
    </span>
    <input
      :id="nodeData[options.id]"
      :value="nodeData[options.value]"
      v-model="selected"
      v-if="multiple"
      type="checkbox"
    />
    <input
      :id="nodeData[options.id]"
      v-model="selected"
      v-else
      type="radio"
      :value="nodeData[options.value]"
    />
    <label :for="nodeData[options.id]">{{ nodeData[options.label] }}</label>
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
          </tree-node>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mixin } from "./mixin";

export default {
  name: "tree-node",
  mixins: [mixin],
  props: ["nodeData", "multiple", "value", "deep", "options"],
  components: {
    treeNode: () => import("./tree-node"),
    // icon: {
    //   props: ["name"],
    //   render() {
    //     return this.$parent.$slots.default
    //       ? this.$parent.$slots.default[0]
    //       : null;
    //   },
    // },
  },
  data() {
    return {
      isOpen: false,
      selected: null,
    };
  },
  mounted() {
    this.$nextTick().then(() => {
      // console.log(this.$parent.$slots.default);
      // console.log(this.$parent.$slots["switcher-close"][0]);
      // console.log(this.$parent.$slots["switcher-open"][0]);
    });
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
    value: {
      handler(v) {
        if (!this.multiple && this.nodeData[this.options.id] === v) {
          let parent = this.$parent;
          while (parent.deep !== 0) {
            parent.isOpen = true;
            parent = parent.$parent;
          }
        }
        if (this.multiple && v.includes(this.nodeData[this.options.id])) {
          let parent = this.$parent;
          while (parent.deep !== 0) {
            parent.isOpen = true;
            parent = parent.$parent;
          }
        }
        this.selected = v;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
