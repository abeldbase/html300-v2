<template>
  <div>
    <h3 v-randomColor>{{ title }}</h3>
      <div class="container-fluid table">
        <div class="row">
          <!--XS size for mobile devices view-->
          <div class="col-xs-2 colHead">ID' S</div>
          <!--SM size for Tab devices view-->
          <div class="col-sm-3 colHead">Year</div>
          <div class="col-sm-2 colHead">Make</div>
          <!--MD size for desktop devices view-->
          <div class="col-md-3 colHead">Model</div>
          <div class="col-md-3 colHead">Type</div>
        </div>
        <div class="row" v-for="(car,index) in cars" :key="index">
          <div class="col-xs-2">{{ car.id }}</div>
          <div class="col-sm-3">{{ car.year }}</div>
          <div class="col-sm-2">{{ car.make }}</div>
          <div class="col-md-3">{{ car.model }}</div>
          <div class="col-md-3">{{ car.type }}</div>
        </div>

      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        title:'Fetching User Data from API into Grid',
        cars : [{}]
      }
  },
  beforeMount() {
    this.$http.get('https://car-data.p.rapidapi.com/cars', {headers:{'X-RapidAPI-Key':'4603739451msh15f9addc67ed099p1b3420jsnf01062794b43', 'X-RapidAPI-Host':'car-data.p.rapidapi.com'}}).then(data => {
      this.cars = data.body      
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
