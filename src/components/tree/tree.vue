<template>
  <div>
    {{ treeStore }}
    <cc-tree :treeStore="treeStore"> </cc-tree>
  </div>
</template>
<script>
import TreeStore from "./tree-store";
export default {
  name: "tre1e",
  data() {
    const treeStore = new TreeStore(this.dataSource, this.options);
    return {
      treeStore,
    };
  },
  computed: {
    val: {
      get() {
        if (this.multiple) {
          return this.value ? this.value.split(",").filter(Boolean) : [];
        } else {
          return this.value;
        }
      },
      set(v) {
        if (this.multiple) {
          this.$emit("input", v.join(","));
        } else {
          this.$emit("input", v);
        }
      },
    },
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          id: "id", //树形结构id
          pid: "pid", //树形结构pid
          label: "label", //树显示的标签
          value: "id", //v-model绑定的值
          key: "id", //绑定的key
          multiple: false,
        };
      },
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
