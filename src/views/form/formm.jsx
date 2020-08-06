import styles from "./form.module.scss";
export default {
  data() {
    return {
      num: 1,
    };
  },
  props: ["icon"],
  methods: {
    handle() {
      this.num += 1;
      console.log(this.num);
    },
  },
  render() {
    return (
      <div class={styles.op}>
        {this.icon}
        <span class={styles.red}>{this.num}</span>
        <el-input vModel={this.num} placeholder="请输入内容" />
        <el-button onClick={this.handle}>++</el-button>
        {this.$slots.default}
      </div>
    );
  },
};
