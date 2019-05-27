import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import InputVue from './components/Input.vue'

Vue.config.productionTip = false

Vue.component('u-input', InputVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
