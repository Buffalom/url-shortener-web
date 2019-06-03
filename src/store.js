import Vue from 'vue'
import Vuex from 'vuex'
import axios from './utils/axios'
import { randomString } from './utils/helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notifications: [],
    shorts: {}
  },
  mutations: {
    addNotification (state, config) {
      state.notifications.push({
        id: config.id,
        timestamp: +new Date(),
        type: config.type || 'success',
        text: config.text || 'Some Notification Text!'
      })
    },
    removeNotification (state, id) {
      state.notifications.splice(state.notifications.findIndex(val => val.id === id), 1)
    },
    addShort (state, short) {
      state.shorts[short.hash] = short
    }
  },
  actions: {
    notify (context, config) {
      config.id = randomString(10)
      context.commit('addNotification', config)
      setTimeout(() => {
        context.commit('removeNotification', config.id)
      }, config.time || 2000)
    },
    async fetchShorts (context) {
      return axios.get('/shorts').then(result => {
        for (let short of result.data) {
          context.commit('addShort', short)
        }
      })
    }
  }
})
