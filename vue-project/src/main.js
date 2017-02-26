import Vue from 'vue'
import App from './pages/App.vue'
import router from './router'
import VueMdl from 'vue-mdl'

Vue.use(VueMdl)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
