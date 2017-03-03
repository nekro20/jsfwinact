<template>
    <div>
        <img :src="currentCat && currentCat.image" class="circle">
        <span class="title">{{currentCat && currentCat.name}}</span>
        <p>
            {{currentCat && currentCat.age}}
            <br>
            {{currentCat && currentCat.color}}
        </p>
        <span class="secondary-content orange-text" style="font-size: 1.5em;">${{currentCat && currentCat.price}}</span>
        <button class="btn btn-flat waves-effect secondary-content" style="border-radius: 50%; top: 41px; padding: 0 8px;" @click="REMOVE_CAT_FROM_CART({ id })">
            <i class="material-icons grey-text">delete</i></button>
    </div>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex'
    import { REMOVE_CAT_FROM_CART } from '../store/mutation-types'

    export default {    
        name: 'cartItem',
        props: {
            id: String
        },
        computed: {
            ...mapGetters([ 'cartProducts' ]),
            currentCat: function() {
                return this.cartProducts.filter(cat => cat.id === this.id)[0];
            }
        },
        methods: mapMutations([ REMOVE_CAT_FROM_CART ])
    }
</script>