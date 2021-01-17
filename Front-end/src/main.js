import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
Vue.prototype.$http = axios
axios.defaults.baseURL = "http://localhost:9000"

Vue.config.productionTip = false

library.add(faHeartbeat)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
