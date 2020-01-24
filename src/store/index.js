import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navDrawer: false
  },
  mutations: {
    TOGGLE_DRAWER (state) {
      state.navDrawer = !state.navDrawer
    }
  },
  actions: {
  },
  modules: {
  }
})
