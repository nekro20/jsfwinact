<template>
    <nav class="light-blue lighten-1" role="navigation">
        <div class="nav-wrapper container">
            <a id="logo-container" href="#" class="brand-logo">Cats For Everyone</a>
            <ul class="right hide-on-med-and-down">
                <li><a href="#"><i class="large material-icons left">shopping_cart</i> Cart is empty</a></li>
            </ul>

            <ul id="nav-mobile" class="side-nav">
                <li><a href="#"><i class="large material-icons left">shopping_cart</i> Cart is empty</a></li>
            </ul>
            <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
        </div>
    </nav>
</template>

<script>
    export default {    
        name: 'headerBar'
    }
</script>

<style>
    .nav-wrapper.container ul {
        line-height: inherit;
    }
</style>