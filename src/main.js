import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faLock } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import InputVue from './components/Input.vue'
import ButtonVue from './components/Button.vue'

library.add(faEnvelope, faLock)
Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.component('u-input', InputVue)
Vue.component('u-button', ButtonVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
