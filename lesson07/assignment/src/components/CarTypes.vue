<template>
  <div>
    <div class="container">
        <h2 v-randomColor>{{ title }}</h2>
        
        <p>{{ details }}</p>
        <img class="img-fluid" :src="require(`../assets/${image}`)" alt="Chania" width="460" height="345">
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title : 'Engine Body',
      details : 'Engine body is made up of high quality metals which shows the color more clear and impressed by some one easily',
      image: 'car.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
