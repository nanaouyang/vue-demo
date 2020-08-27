import { list2tree } from "./list2tree";

export default class TreeStore {
  constructor(dataSource = [], options = {}) {
    this.listData = dataSource;
    this.treeData = list2tree(
      dataSource.map((_) => ({ ..._, indeterminate: false })),
      options
    );
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
    if (this.multiple) {
      if (value.length > this.selected.length) {
        const t = value.filter((_) => !this.selected.includes(_));
        this.selected = [...new Set([...this.selected, ...this.getIdsById(t)])];
        console.log(this.getNodeById(t[0]));
        // if (this.getIdsById(t).every((_) => this.selected.includes(_))) {
        //   console.log(this.treeData);
        // }
      } else {
        const t = this.selected.filter((_) => !value.includes(_));
        this.selected = this.selected.filter(
          (_) => !this.getIdsById(t).includes(_)
        );
      }
    } else {
      this.selected = value;
    }
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
  getIdsById(value) {
    let a = [];
    const getChildren = (val) => {
      val.forEach((item) => {
        const t = this.listData
          .filter((_) => _[this.getOptions().pid] === item)
          .map((_) => _[this.getOptions().id]);
        if (t.length) {
          a = [...new Set([...a, ...t, ...value])];
          getChildren(t);
        } else {
          a = [...new Set([...a, ...value])];
        }
      });
    };
    getChildren(value);
    return a;
  }
  getNodeById(value) {
    console.log(value);
    let node = {};
    const getNode = (arr) => {
      arr.forEach((item) => {
        if (item[this.getOptions().id] === value) {
          return item;
        } else if (item[this.getOptions().children]) {
          getNode(item[this.getOptions().children]);
        }
      });
    };
    getNode(this.treeData);
    return node;
  }
}
