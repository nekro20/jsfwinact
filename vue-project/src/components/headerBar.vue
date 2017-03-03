<template>
    <nav class="light-blue lighten-1" role="navigation">
        <div class="nav-wrapper container">
            <a id="logo-container" href="#" class="brand-logo">Cats For Everyone</a>
            <ul class="right hide-on-med-and-down">
                <li><router-link to="/cart"><i class="large material-icons left">shopping_cart</i> {{cartStatus}}</router-link></li>
            </ul>

            <ul id="nav-mobile" class="side-nav">
                <li><router-link to="/cart"><i class="large material-icons left">shopping_cart</i> {{cartStatus}}</router-link></li>
            </ul>
            <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
        </div>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {    
        name: 'headerBar',
        computed: {
            ...mapGetters([ 'cartLength' ]),
            cartStatus: function() {
                return this.cartLength ? this.cartLength + ' cats in cart' : 'Cart is empty'
            }
        }
    }
</script>

<style>
    .nav-wrapper.container ul {
        line-height: inherit;
    }
</style>