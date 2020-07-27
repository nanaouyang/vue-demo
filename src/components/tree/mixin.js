const mixin = {
  watch: {
    selected(v) {
      this.$emit("input", v);
    },
  },
};
export { mixin };
