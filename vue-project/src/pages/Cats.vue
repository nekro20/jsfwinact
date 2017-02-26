<template>
  <section>
    <filter-panel></filter-panel>
    <cat-item></cat-item>
  </section>
</template>

<script>
import filterPanel from '../components/filterPanel.vue'
import catItem from '../components/catItem.vue'

export default {
  name: 'cats',
  data () {
    return {}
  },
  methods: {
    
  },
  components: {
    filterPanel,
    catItem
  }
}
</script>
