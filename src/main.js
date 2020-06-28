import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
