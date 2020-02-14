import Vue from "vue";
import Element from "element-ui";
import "../assets/element-variables.scss";
Element.Input.props.clearable.default = true;
Vue.use(Element, { size: "small" });
