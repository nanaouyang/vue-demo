<template>
  <div>
    {{ test }}
    <ul>
      <li v-for="(item, index) in state.todoList" :key="index">{{ item }}</li>
    </ul>
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
    <button @click="test = '222'">修改</button>
    <button @click="console">console</button>
  </div>
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
