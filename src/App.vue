<template>
  <div id="app">
    <el-button @click="changeMsg">aaa</el-button>
    <el-input v-model="msg"></el-input>
    <component :is="msg"></component>
<!--    <router-view />-->
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    console.log(this.$http.get("aa"));
  },
  components:{
    'tab1':()=>import('./views/tab1'),
    'tab2':()=>import('./views/tab2'),
  },
  data() {
    return {
      currentComponent:"",
      msg: "tab1",
      msg1: "",
      msg2: "",
      msg3: "",
      obj: {},
      show: false
    };
  },
  methods: {
    changeMsg() {
      this.msg = "Hello world.";
      this.msg1 = this.$refs.msgDiv.innerHTML;
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML;
      });
      this.msg3 = this.$refs.msgDiv.innerHTML;
    }
  }
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
