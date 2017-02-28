<template>
  <div class="card horizontal  hoverable grey lighten-4">
    <div class="card-image waves-effect waves-block waves-light">
      <a href="#detail-page"><img :src="currentCat.image"></a>
    </div>
    <div class="card-stacked">
      <div class="card-content" style="position: relative;">
        <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        <a href="#detail-page" class="card-title">{{currentCat.name}}</span></a>
        <p>{{currentCat.age}} years old</p>
        <p>{{currentCat.color.join(', ')}}</p>
      </div>
      <div class="card-action">
        <span class="orange-text">{{currentCat.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {    
      name: 'catItem',
      computed: {
        currentCat: function () {
          return this.$store.getters.allCats.filter(cat => cat.id === this.id)[0];
        }
      },
      props: { id: String }
  }
</script>