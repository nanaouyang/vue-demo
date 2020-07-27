<template>
  <div>
    <template v-for="node in treeData">
      <tree-node
        :options="options"
        :deep="deep + 1"
        v-model="selected"
        :multiple="multiple"
        :key="node[options.key]"
        :node-data="node"
      >
        <template #switcher-close>
          <slot name="switcher-close">
            -
          </slot>
        </template>
        <template #switcher-open>
          <slot name="switcher-open">
            +
          </slot>
        </template>
        <template #default="{nodeData}">
          <slot :nodeData="nodeData"> {{ nodeData[options.label] }} </slot>
        </template>
      </tree-node>
    </template>
  </div>
</template>

<script>
import { mixin } from "./mixin";
import { list2tree } from "./list2tree";
export default {
  name: "cc-tree",
  // ["dataSource", "multiple", "value", "options"]
  mixins: [mixin],
  props: {
    dataSource: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    // eslint-disable-next-line vue/require-prop-type-constructor
    value: Array | String,
    options: {
      type: Object,
      default: () => {
        return {
          id: "id", //树形结构id
          pid: "pid", //树形结构pid
          label: "label", //树显示的标签
          value: "id", //v-model绑定的值
          key: "id", //绑定的key
        };
      },
    },
  },
  data() {
    return {
      deep: 0,
      selected: this.value,
    };
  },
  watch: {
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
      return list2tree(this.dataSource, this.options);
    },
  },
  methods: {},
};
</script>

<style scoped></style>
