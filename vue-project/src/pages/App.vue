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
  </main>
</template>

<script>
import headerBar from '../components/headerBar.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    
  },
  components: {headerBar}
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
