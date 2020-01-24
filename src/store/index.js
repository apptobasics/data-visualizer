import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navDrawer: false,
    jsonData: []
  },
  mutations: {
    TOGGLE_DRAWER (state) {
      state.navDrawer = !state.navDrawer
    },
    UPDATE_JSON (state, payload) {
      state.jsonData = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
