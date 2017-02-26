import Cats from './pages/Cats.vue'
import Details from './pages/Details.vue'
import CartPage from './pages/Cart.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
var router = new VueRouter({
    routes: [
        {path: '/', component: Cats},
        {path: '/details/:id', component: Details},
        {path: '/cart', component: CartPage}
    ]
})

export default router
