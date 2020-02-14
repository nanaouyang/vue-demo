import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";

Vue.config.productionTip = false;
Vue.prototype.$http = "aaa";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
