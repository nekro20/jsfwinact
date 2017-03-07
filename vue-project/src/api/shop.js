import Vue from 'vue'
import Resourse from 'vue-resource'

Vue.use(Resourse)

export default {
    getCats () {
        return Vue.http.get('api/cats')
    },

    buyCats (cats, cb, errorCb) {
        setTimeout(() => {
        (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
            ? cb()
            : errorCb()
        }, 100)
    }
}