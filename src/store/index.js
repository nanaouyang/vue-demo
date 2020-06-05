import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    user: {
      name: "zifeng",
    },
  },
  mutations: {
    add(state) {
      state.count++;
    },
    min(state) {
      state.count--;
    },
  },
  actions: {
    asyncAdd({ commit }) {
      setTimeout(() => {
        commit("add");
      }, 1000);
    },
  },
  modules: {},
});
