export default class Dep {
  constructor() {
    this.subs = [];
  }

  add(sub) {
    this.subs.push(sub);
  }

  notify(arg) {
    this.subs.forEach((sub) => {
      sub(arg);
    });
  }
}
