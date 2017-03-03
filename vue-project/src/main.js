import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './pages/App.vue'
import store from './store'
import router from './router'

sync(store, router);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
