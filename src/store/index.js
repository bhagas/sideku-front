import Vue from "vue";
import Vuex from "vuex";
import Login from "./login"
Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   counter: 0
  // },
  // getters: {
    
  // },

  // actions: {
  //   async increment({commit}){
      
  //     commit("rubahCounter", 1)
  //   },
  //   async decrement({commit}){
  //     commit("rubahCounter", -1)
  //   }
  // },
  // mutations: {
  //   rubahCounter: (state, angka) => (state.counter += angka)
  // },
  modules: {
    Login
  }
});
