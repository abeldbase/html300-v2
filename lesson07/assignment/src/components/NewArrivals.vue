<template>
  <div>
    <h2 v-randomColor>{{ title }}</h2>
    <div id="demo" class="carousel slide" data-ride="carousel">

      <!-- carousel Indicators -->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      <!-- The slideshow -->
      <div class="carousel-inner">
        <div :class="(index==0)? 'carousel-item active' : 'carousel-item'" v-for="(vehicle, index) in vehicles" :key="index">
          <img :src="require(`../assets/${vehicle.path}`)" :alt="`${vehicle.title}`" width="1100" height="500">
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
export default {
  data() {
    return {
      title: 'New Arrivals',
      vehicles: [{ title: 'Fantasy', path: "Fantasy.jpg", focus: 'active' }, { title: 'AudiStyle', path: 'AudiStyle.jpg', focus: '' }, { title: 'Racer', path: 'Racer.jpg', focus: '' }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-inner img {
  width: 100%;
  height: 100%
}
</style>
