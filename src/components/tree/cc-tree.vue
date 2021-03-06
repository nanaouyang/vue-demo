<template>
  <div>
    <template v-for="node in treeData">
      <tree-node
          :active="active"
          @onChange="onChange"
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
        <template #default="{ nodeData }">
          <slot :nodeData="nodeData"> {{ nodeData[options.label] }}</slot>
        </template>
      </tree-node>
    </template>
  </div>
</template>

<script>
import {list2tree} from "./list2tree";

export default {
  name: "cc-tree",
  props: {
    // 高亮显示的value
    active: {
      type: Array,
      default: () => [],
    },
    //数据源
    dataSource: {
      type: Array,
      default: () => [],
    },
    //是否多选
    multiple: {
      type: Boolean,
      default: false,
    },
    // eslint-disable-next-line vue/require-prop-type-constructor
    value: Array | String,
    //数据结构
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
    selected(v, o) {
      if (this.multiple && v && o) {
        if (v.length > o.length) {
          const id = v.filter((item) => !o.includes(item));
          this.getIds(id[0], this.dataSource);
        }
        if (v.length < o.length) {
          const id = o.filter((item) => !v.includes(item));
          this.getIdsExclude(id[0], this.dataSource);
        }
      }
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
      return list2tree(this.dataSource, this.options);
    },
  },
  methods: {
    onChange(v) {
      this.$emit('onChange', v)
    },
    //全选
    getIds(id, dataSource) {
      dataSource
          .filter((item) => item[this.options.pid] === id)
          .forEach((i) => {
            this.selected = [
              ...new Set([...this.selected, ...[i[this.options.id]]]),
            ];
            this.getIds(i[this.options.id], dataSource);
          });
    },
    //反选
    getIdsExclude(id, dataSource) {
      dataSource
          .filter((item) => item[this.options.pid] === id)
          .forEach((i) => {
            this.selected = this.selected.filter((n) => n !== i[this.options.id]);
            this.getIdsExclude(i[this.options.id], dataSource);
          });
    },
  },
};
</script>

<style scoped></style>
