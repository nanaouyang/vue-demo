import Vue from "vue";
import App from "./App.vue";
import VueCompositionApi from "@vue/composition-api";

// import "./plugins/element.js";
// import "./plugins/axios";
import "./plugins";
import "./components";
import "./directive";
import customPrototype from "./prototype";
import router from "./router";
import store from "./store";
Vue.use(customPrototype);
Vue.use(VueCompositionApi);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
