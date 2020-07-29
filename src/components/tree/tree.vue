<template>
  <div>
    <cc-tree :multiple="multiple" v-model="val" :dataSource="dataSource">
    </cc-tree>
  </div>
</template>
<script>
export default {
  name: "tree",
  computed: {
    val: {
      get() {
        if (this.multiple) {
          return this.value ? this.value.split(",").filter((i) => i) : [];
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
    multiple: {
      type: Boolean,
      deafult: false,
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
