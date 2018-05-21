import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

Vue.config.productionTip = false

const API_URL = process.env.API_URL || 'http://localhost:3000'

axios.defaults.baseURL = API_URL
axios.defaults.headers = {
  'X-User-Token': localStorage.userId + ':' + localStorage.userToken
}


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
