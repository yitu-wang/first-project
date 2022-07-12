import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userphoto: '', //头像地址
    username: '', //用户名字
  },
  getters: {},
  mutations: {
    set_userphoto(state, value) {
      state.userphoto = value
    },
    set_username(state, value) {
      state.username = value
    },
  },
  actions: {},
  modules: {},
})
