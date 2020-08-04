import { list2tree } from "./list2tree";

export default class TreeStore {
  constructor(dataSource, options) {
    this.listData = dataSource;
    this.treeData = list2tree(dataSource, options);
    this.selected = [];
    this.multiple = options.multiple;
  }
  getSelected() {
    if (this.multiple) {
      return this.selected.join(",");
    } else {
      return this.selected;
    }
  }
}
