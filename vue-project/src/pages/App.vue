<template>
    <main>
        <header-bar></header-bar>
        <div class="container">
            <div class="section">
                <div class="row">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <footer class="page-footer orange">
            <div class="footer-copyright">
                <div class="container">
                    Made by <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                </div>
            </div>
        </footer>
    </main>
</template>

<script>
    import headerBar from '../components/headerBar.vue'

    export default {
        name: 'app',
        components: { headerBar },
        created () {
            this.$store.dispatch('getAllCats')
        }
    }
</script>

<style lang="scss">
    .icon-block {
        padding: 0 15px;
    }

    .icon-block .material-icons {
        font-size: inherit;
    }
</style>
