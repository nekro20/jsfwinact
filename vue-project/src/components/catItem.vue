<template>
    <div class="card horizontal  hoverable grey lighten-4">
        <div class="card-image waves-effect waves-block waves-light">
            <router-link :to="'/details/' + currentCat.id"><img :src="currentCat.image"></router-link>
        </div>
        <div class="card-stacked">
            <div class="card-content" style="position: relative;">
                <a class="btn-floating halfway-fab waves-effect waves-light red"
                   @click="addToCart(currentCat)"
                   :class="{ disabled: !currentCat.aviable }">
                    <i class="material-icons">add</i>
                </a>
                <router-link :to="'/details/' + currentCat.id" class="card-title">
                    {{currentCat.name}}</span></router-link>
                <p>{{currentCat.age}} years old</p>
                <p>{{currentCat.color}}</p>
            </div>
            <div class="card-action">
                <span class="orange-text">{{currentCat.price}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'catItem',
        computed: {
            currentCat: function() {
                return this.$store.getters.allCats.filter(cat => cat.id === this.id)[0];
            }
        },
        methods: mapActions([
            'addToCart'
        ]),
        props: { id: String }
    }
</script>