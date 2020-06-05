<template>
  <div id="app">
    {{ user }}
    {{ count }}
    {{ user1 }}
    {{ user2 }}
    <el-button @click="add">+</el-button>
    <el-button @click="asyncAdd">async+</el-button>
    <el-button @click="min">-</el-button>
    <vi-modal> <el-button>弹窗</el-button> </vi-modal>
    <el-input v-model="msg"></el-input>
    <component :is="msg"></component>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app",
  mounted() {
    console.log(this.$store.state.user.name);
  },
  components: {
    tab1: () => import("./views/tab1"),
    tab2: () => import("./views/tab2"),
  },
  // computed: mapState({
  //   user1: (state) => state.user.name,
  //   user2: "user",
  // }),
  // computed: mapState(["user"]),
  computed: {
    ...mapState(["user", "count"]),
  },
  data() {
    return {
      currentComponent: "",
      msg: "tab1",
      msg1: "",
      msg2: "",
      msg3: "",
      obj: {},
      show: false,
    };
  },
  methods: {
    add() {
      this.$store.commit("add");
    },
    asyncAdd() {
      this.$store.dispatch({ type: "asyncAdd" });
    },
    min() {
      this.$store.commit("min");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
