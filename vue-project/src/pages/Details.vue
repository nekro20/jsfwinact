<template>
    <section>
        <div class="col s5 offset-s1">
            <img :src="currentCat && currentCat.image">
        </div>
        <div class="col s4 offset-s1">
            <h1>Margo</h1>
            <table class="striped">
                <thead>
                <tr>
                    <th data-field="id">Feature</th>
                    <th data-field="name">Value</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Age</td>
                    <td>{{currentCat.age}}</td>
                </tr>
                <tr>
                    <td>Fur density</td>
                    <td>{{currentCat.furDensity}}</td>
                </tr>
                <tr>
                    <td>Size</td>
                    <td>{{currentCat.size}}</td>
                </tr>
                <tr>
                    <td>Color</td>
                    <td>{{currentCat.color}}</td>
                </tr>
                <tr>
                    <td>Sterile</td>
                    <td>{{currentCat.sterile ? 'yes' : 'no'}}</td>
                </tr>
                </tbody>
            </table>
            <p class="orange-text right-align">
                <button class="btn-large waves-effect waves-light red right"
                        @click="addToCart(currentCat)" :class="{ disabled: !currentCat.aviable }">
                    <i class="material-icons left" v-show="currentCat.aviable">add</i>
                    {{currentCat.aviable ? 'Add to cart' : 'Already added'}}
                </button>
                <span class="right" style="font-size: 2.5em; margin-right: 1em;">${{currentCat.price}}</span>
            </p>
        </div>
    </section>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'details',
        computed: {
            currentCat: function() {
                const id = this.$route.params.id;
                return this.$store.getters.allCats.filter(cat => cat.id === id)[0]
            }
        },
        methods: mapActions([
            'addToCart'
        ])
    }
</script>