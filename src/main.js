import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faLock } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import InputVue from './components/Input.vue'

library.add(faEnvelope, faLock)
Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.component('u-input', InputVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
