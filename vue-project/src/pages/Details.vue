<template>
  <section>
    <div class="col s5 offset-s1">
     <img src="http://lorempixel.com/520/520/cats/1">
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
            <td>Size</td>
          </tr>
          <tr>
            <td>Fur density</td>
            <td>Fur color</td>
          </tr>
          <tr>
            <td>5 year old</td>
            <td>medium</td>
          </tr>
          <tr>
            <td>high</td>
            <td>white</td>
          </tr>
        </tbody>
      </table>
      <p class="orange-text right-align">
        <button class="btn-large waves-effect waves-light red right"><i class="material-icons left">add</i> Add
          to cart</button>
        <span class="right" style="font-size: 2.5em; margin-right: 1em;">$50</span>
      </p>
    </div>
  </section>
</template>

<script>

export default {
  name: 'details',
  data () {
    return {}
  },
  methods: {
    
  }
}
</script>