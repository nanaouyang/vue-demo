<template>
  <div></div>
</template>

<script>
import { reactive, computed, ref } from "@vue/composition-api";
export default {
  name: "tab1",
  setup() {
    const test = ref("11111");
    const state = reactive({
      todoList: ["123123123", "sadasdasdsa"],
      count: 0,
      double: computed(() => state.count * 2),
    });

    function increment() {
      state.todoList = [...state.todoList, "3213123"];
    }
    function console() {
      window.console.log(test.value);
    }
    return {
      test,
      state,
      increment,
      console,
    };
  },
};
</script>

<style scoped></style>
