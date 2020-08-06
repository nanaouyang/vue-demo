import styles from "./form.module.scss";
import formm from "@/views/form/formm";
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    handle() {
      this.num += 1;
      console.log(this.num);
    },
  },
  created() {
    console.log("aaa");
  },
  render() {
    return (
      <div class={styles.op}>
        <formm icon={<div style={{ color: "#0ff" }}>oooo</div>}>22</formm>
      </div>
    );
  },
};
