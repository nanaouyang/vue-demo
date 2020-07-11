import Vue from "vue";
// import HelloWorld from "./HelloWorld";
// import ViModal from "./vi-modal";
//
// // Vue.use(function () {
// Vue.component("HelloWorld", HelloWorld);
// Vue.component("ViModal", ViModal);
// });
const componentsContext = require.context("", true, /\.vue$/);
componentsContext.keys().forEach((component) => {
  // 获取文件中的 default 模块
  const componentConfig = componentsContext(component).default;
  Vue.component(componentConfig.name, componentConfig);
});
