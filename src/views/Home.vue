<template>
  <div>
    {{ val }}
    <tree
      :options="{ multiple: true }"
      v-model="val"
      :data-source="dataSource"
    ></tree>
  </div>
</template>

<script>
// @ is an alias to /src
import { Redux } from "@/Redux";
import tree from "./tree/tree";
export default {
  name: "Home",
  components: { tree },
  computed: {},
  created() {
    this.$root.redux = new Redux();
  },
  methods: {
    plus() {
      this.num += 1;
    },
    log() {
      this.root.log();
      // console.log(this.root);
    },
  },
  data() {
    return {
      val: ["7"],
      dataSource: [
        { id: "1", pid: "0", value: "a", label: "aa" },
        { id: "2", pid: "0", value: "b", label: "bb" },
        { id: "3", pid: "1", value: "c", label: "cc" },
        { id: "4", pid: "1", value: "d", label: "dd" },
        { id: "5", pid: "3", value: "e", label: "ee" },
        { id: "6", pid: "2", value: "f", label: "ff" },
        { id: "7", pid: "5", value: "g", label: "gg" },
        { id: "8", pid: "4", value: "h", label: "hh" },
      ],
      num: 0,
      root: 0,
    };
  },
};
</script>
