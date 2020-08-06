import Vue from "vue";
import Vuex from "vuex";
import { user } from "./user";
import { dict } from "./dict";
import { list } from "@/services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    add(state) {
      state.count++;
    },
    min(state) {
      state.count--;
    },
    set(state, payload) {
      state.user = { ...state.user, ...payload.payload };
    },
  },
  actions: {
    async asyncAdd({ commit }) {
      const { data } = await list();
      commit({ type: "set", payload: data });
    },
  },
  modules: { user, dict },
});
