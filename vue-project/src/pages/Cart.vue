<template>
  <div class="col s10 offset-s1">
        <ul class="collection">
          <cart-item></cart-item>
          <li class="collection-item">
            <button class="btn orange btn-large waves-effect left">
              <i class="material-icons left">shopping_basket</i>Checkout
            </button>
            <p class="secondary-content orange-text right-align" style="font-size: 1.5em;">$200</p>
          </li>
        </ul>

      </div>
</template>

<script>
import cartItem from '../components/cartItem.vue'

export default {
  name: 'cats',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    
  },
  components: {cartItem}
}
</script>

<style lang="scss">
</style>
