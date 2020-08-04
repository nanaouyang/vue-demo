export class Redux {
  constructor() {
    this.count = 0;
  }

  get() {
    return this.count;
  }

  set() {
    this.count += 1;
  }
  log() {
    console.log(this.count);
  }
}
