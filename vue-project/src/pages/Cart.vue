<template>
    <div class="col s10 offset-s1">
        <ul class="collection">
            <li class="collection-item avatar" v-for="item in cartProducts">
                <cart-item :id="item.id"></cart-item>
            </li>
            <li class="collection-item">
                <button class="btn orange btn-large waves-effect left">
                    <i class="material-icons left">shopping_basket</i>Checkout
                </button>
                <p class="secondary-content orange-text right-align" style="font-size: 1.5em;">${{totalSum}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import cartItem from '../components/cartItem.vue'
    import { mapGetters } from 'vuex'

    export default {
        name: 'cart',
        computed: {
            ...mapGetters([ 'cartProducts' ]),
            totalSum: function() {
                return this.cartProducts.reduce((sum, current) => {return sum + current.price}, 0)
            }
        },
        components: { cartItem }
    }
</script>

<style lang="scss">
</style>
