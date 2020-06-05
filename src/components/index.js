import Vue from "vue";
import HelloWorld from "./HelloWorld";
import ViModal from "./vi-modal";
Vue.use(function () {
  Vue.component("HelloWorld", HelloWorld);
  Vue.component("ViModal", ViModal);
});
