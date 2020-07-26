const mixin = {
  watch: {
    value: {
      handler(v) {
        this.radio = v;
      },
      immediate: true,
    },
  },
};
export { mixin };
