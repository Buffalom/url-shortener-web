import Vue from 'vue'
import Vuex from 'vuex'
import axios from './utils/axios'
import globalErrorHandler from './utils/globalErrorHandler'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shorts: {}
  },
  mutations: {
    addShort (state, short) {
      state.shorts[short.hash] = short
    }
  },
  actions: {
    async fetchShorts (context) {
      return axios.get('/shorts').then(result => {
        for (let short of result.data) {
          context.commit('addShort', short)
        }
      })
    }
  }
})
