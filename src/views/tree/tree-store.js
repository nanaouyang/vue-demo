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
    this.selected = null;
    this.multiple = options.multiple;
  }

  getTreeData() {
    return this.treeData;
  }

  getOptions() {
    return this.options;
  }

  getValue() {
    return this.selected;
  }

  setValue(value) {
    this.selected = value;
  }

  getStringValue() {
    return this.selected;
  }

  setStringValue(value) {
    this.selected = value;
  }
}
