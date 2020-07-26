<template>
  <div>
    <span @click="isOpen = !isOpen" v-if="nodeData.children">
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
          <tree-node v-model="selected" :multiple="multiple" :node-data="node">
            <template #switcher-close>
              <slot name="switcher-close"></slot>
            </template>
            <template #switcher-open>
              <slot name="switcher-open"></slot>
            </template>
          </tree-node>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "tree-node",
  props: ["nodeData", "multiple", "value"],
  components: {
    treeNode: () => import("./tree-node"),
    // icon: {
    //   props: ["name"],
    //   render(h, context) {
    //     return h("div", this.$slots[context.name]);
    //   },
    // },
  },
  data() {
    return {
      isOpen: false,
      checked: false,
      selected: null,
    };
  },
  mounted() {
    this.$nextTick().then(() => {
      console.log(this.$parent.$slots["switcher-close"][0]);
      console.log(this.$parent.$slots["switcher-open"][0]);
    });
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
