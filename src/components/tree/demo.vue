<template>
  <div>
    {{ selected }}
    <cc-tree :multiple="true" :dataSource="dataSource" v-model="selected">
      <template #switcher-close>
        <span style="color: #f0f;">--</span>
      </template>
      <template #switcher-open>
        ++
      </template>
      <template #default="{nodeData}"> 哈{{ nodeData.label }}1 </template>
    </cc-tree>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      selected: ["6", "7"],
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
    };
  },
};
</script>

<style scoped></style>
