<template>
  <div id="app">
    {{selected}}
        <cc-tree :active="[6]" @onChange="onChange" v-model="selected" :multiple="false" :dataSource="dataSource">
          <template #switcher-close>
            <span style="color: #f0f;">--</span>
          </template>
          <template #switcher-open>
            ++
          </template>
          <template #default="{nodeData}"> 哈{{ nodeData.label }}1 </template>
        </cc-tree>
    <router-view />
  </div>
</template>

<script>
// import { mapState } from "vuex";
// import list from "./testData";
export default {
  name: "app",
  mounted() {
    console.log(this.$say);
    // console.log(this.$store.state.user.name);
  },
  components: {
    // tab1: () => import("./views/tab1"),
    // tab2: () => import("./views/tab2"),
  },
  // computed: mapState({
  //   user1: (state) => state.user.name,
  //   user2: "user",
  // }),
  // computed: mapState(["user"]),
  computed: {
    // ...mapState(["user", "count"]),
  },
  data() {
    return {
      selected: 6,
      dataSource: [
        { id: 1, pid: 0, value: "a", label: "aa" },
        { id: 2, pid: 0, value: "b", label: "bb" },
        { id: 3, pid: 1, value: "c", label: "cc" },
        { id: 4, pid: 1, value: "d", label: "dd" },
        { id: 5, pid: 3, value: "e", label: "ee" },
        { id: 6, pid: 2, value: "f", label: "ff" },
        { id: 7, pid: 5, value: "g", label: "gg" },
        { id: 8, pid: 4, value: "h", label: "hh" },
      ],
      message: "dasd",
      currentComponent: "",
      msg: "tab1",
      msg1: "",
      msg2: "",
      msg3: "",
      obj: {},
      show: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
    };
  },
  watch: {},
  methods: {
    onChange(v){
      console.log(v)
    },
    handleSelect(v) {
      console.log(v.label);
    },
    img() {
      return '';
    },
    add() {
      this.$store.commit("add");
    },
    asyncAdd() {
      this.$store.dispatch({ type: "asyncAdd" });
    },
    min() {
      this.$store.commit("min");
    },
  },
};
</script>

<style>
/*#app {*/
/*  font-family: "Avenir", Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
