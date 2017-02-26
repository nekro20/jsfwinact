<template>
    <div class="col s9">
      <div class="col s6">
        <div class="card horizontal  hoverable grey lighten-4">
          <div class="card-image waves-effect waves-block waves-light">
            <a href="#detail-page"><img src="http://lorempixel.com/200/200/cats/1"></a>
          </div>
          <div class="card-stacked">
            <div class="card-content" style="position: relative;">
              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
              <a href="#detail-page" class="card-title">Margo</span></a>
              <p>5 year old</p>
              <p>white</p>
            </div>
            <div class="card-action">
              <span class="orange-text">5000 руб</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {    
        name: 'catItem'
    }
</script>