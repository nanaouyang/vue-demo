<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <HelloWorld></HelloWorld>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    console.log(this.$http.get("aa"));
  },
  data() {
    return {
      show: true
    };
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
