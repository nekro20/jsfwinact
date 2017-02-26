import Vue from 'vue'
import App from './pages/App.vue'
import store from './store'
import router from './router'
import VueMdl from 'vue-mdl'

Vue.use(VueMdl)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
