<template>
  <div id="app">
    {{ selected }}
    <cc-tree v-model="selected" :multiple="false" :dataSource="dataSource">
    </cc-tree>
    <div id="hook-arguments-example" v-demo:foo.sync="message"></div>
    <tab2></tab2>
    <img :src="img()" alt="" />
    <HelloWorld></HelloWorld>
    {{ user }}
    {{ count }}
    <!--    {{ user1 }}-->
    <!--    {{ user2 }}-->
    <el-button @click="add">+</el-button>
    <el-button @click="asyncAdd">async+</el-button>
    <el-button @click="min">-</el-button>
    <vi-modal>
      <template #test1="slotProps">
        <el-button>{{ slotProps.slotProps }}</el-button>
      </template>
      <el-button>弹窗</el-button>
    </vi-modal>
    <el-input v-model="msg"></el-input>
    <component :is="msg"></component>
    <el-table :data="tableData" border style="width: 100%;">
      <el-table-column fixed prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column label="邮编" width="120">
        <template #default="{ row }">
          {{ row.zip }}
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template>
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Img } from "coms";
export default {
  name: "app",
  mounted() {
    console.log(this.$say);
    console.log(this.$store.state.user.name);
  },
  components: {
    tab1: () => import("./views/tab1"),
    tab2: () => import("./views/tab2"),
  },
  // computed: mapState({
  //   user1: (state) => state.user.name,
  //   user2: "user",
  // }),
  // computed: mapState(["user"]),
  computed: {
    ...mapState(["user", "count"]),
  },
  data() {
    return {
      selected: [5],
      dataSource: [
        { id: 1, pid: 0, value: "a", label: "aa" },
        { id: 2, pid: 0, value: "b", label: "bb" },
        { id: 3, pid: 1, value: "c", label: "cc" },
        { id: 4, pid: 1, value: "d", label: "dd" },
        { id: 5, pid: 3, value: "e", label: "ee" },
        { id: 6, pid: 2, value: "f", label: "ff" },
        { id: 7, pid: 5, value: "g", label: "gg" },
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
    img() {
      return Img.random(400, 400);
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
