import { list2tree } from "./list2tree";

export default class TreeStore {
  constructor(dataSource = [], options = {}) {
    this.listData = dataSource;
    this.treeData = list2tree(dataSource, options);
    this.options = {
      id: "id", //树形结构id
      pid: "pid", //树形结构pid
      label: "label", //树显示的标签
      value: "id", //v-model绑定的值
      key: "id", //绑定的key
      multiple: false,
      ...options,
    };
    this.multiple = options.multiple;
    this.selected = this.multiple ? [] : "";
  }

  //获取转化后数据
  getTreeData() {
    return this.treeData;
  }

  //获取配置信息
  getOptions() {
    return this.options;
  }

  //获得原始值
  getValue() {
    return this.selected;
  }

  //原始赋值
  setValue(value) {
    this.selected = value;
  }

  //获取字符串形式值
  getStringValue() {
    if (this.multiple) {
      return this.selected ? this.selected.join(",") : "";
    } else {
      return this.selected;
    }
  }

  //字符串形式赋值
  setStringValue(value) {
    if (this.multiple) {
      this.selected = value ? value.split(",").filter(Boolean) : [];
    } else {
      this.selected = value;
    }
  }
}
