<template>
  <div class="home">
    <demo></demo>
  </div>
</template>

<script>
// @ is an alias to /src
import { Redux } from "@/Redux";

export default {
  name: "Home",
  components: {},
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
      num: 0,
      root: 0,
    };
  },
};
</script>
