<template>
  <div>
    <ul>
      <li v-for="(item, index) in state.todoList" :key="index">{{ item }}</li>
    </ul>
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
  </div>
</template>

<script>
import { reactive, computed } from "@vue/composition-api";
export default {
  name: "tab1",
  setup() {
    const state = reactive({
      todoList: ["123123123", "sadasdasdsa"],
      count: 0,
      double: computed(() => state.count * 2),
    });

    function increment() {
      state.todoList = [...state.todoList, "3213123"];
    }

    return {
      state,
      increment,
    };
  },
};
</script>

<style scoped></style>
