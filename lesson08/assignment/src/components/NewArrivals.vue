<template>
  <div>
    <h5 v-randomColor>{{ carousels.title }}</h5>
    <div id="demo" class="carousel slide" data-ride="carousel">

      <!-- carousel Indicators -->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      <!-- The slideshow -->
      <div class="carousel-inner">
        <div :class="(index == 0) ? 'carousel-item active' : 'carousel-item'" v-for="(image, index) in carousels.images"
          :key="index">
          <!-- when user click on the image toggleImageBorder function would be called from mixin-->
          <img :src="require(`../assets/${image.src}`)" :alt="`${image.alt}`" :title="`${image.title}`"
            @click="toggleImageBorder" class="img-border" style="cursor:pointer">
        </div>
      </div>
      <!-- Left and right controls -->
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>
</template>

<script>
// import the mixin
import SearchMixin from '../mixins/SearchMixin'
export default {
  props: {
    carousels: {
      type: Object,
      // custom props validator
      validator: function (object) {
        return (typeof (object.title) === "string" &&
          object.images instanceof Array &&
          object.images.length > 0
        )
      }
    }
  },

  // register mixin to access the mixin properties
  mixins: [SearchMixin]

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-inner img {
  width: 1200px;
  height: 500px
}

.img-border {
  padding: 5px;
  border: 1px solid red;
}

h5 {
  text-align: center;
  margin-top: 50px;
}</style>
