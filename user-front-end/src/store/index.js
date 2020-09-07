import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      login: 0,
      userFace: require('../assets/tmp/face.png'),
      userName: '未登录'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
