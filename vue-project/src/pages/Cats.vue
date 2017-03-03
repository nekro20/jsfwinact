<template>
  <section>
    <filter-panel></filter-panel>
    <div class="col s9">
      <div class="col s6" v-for="cat in cats">
        <cat-item :id="cat.id"></cat-item>
      </div>
    </div>
  </section>
</template>

<script>
import filterPanel from '../components/filterPanel.vue'
import catItem from '../components/catItem.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'cats',
  data () {
    return {}
  },
  components: {
    filterPanel,
    catItem
  },
  computed: mapGetters({
    cats: 'allCats'
  }),
  methods: mapActions([
    'addToCart'
  ])
}
</script>
