<template>
  <div>
    <main role="main" class="container">
      <!-- jumbotron section with tooltip added -->
      <div class="jumbotron">
        <h1 v-randomColor>{{ title }}</h1>
        <p class="lead" v-html="description"></p>
        <!-- type something to change title -->
        <label for="title">Change Title
          <input type="text" v-model="title" id="title" value="" placeholder="change title here" size="50">
        </label>
        <!-- click on toggle to change the text based on condition-->
        <div class="toggle">
          <button class="btn btn-lg btn-primary" @click="isSatisfied = !isSatisfied">Toggle Me&raquo;</button>
          <h4 v-if="isSatisfied">Happy that you are satisfied with our services!!!</h4>
          <h4 v-else>We are sorry about your inconvenience</h4>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  mounted() {
    $('[data-toggle="tooltip"]').tooltip();
  },

  data() {
    return {
      isSatisfied: true,
      title: 'Driving Vehicle APIs Forward',
      description: `Are you planning on buying a new <a href="#" data-toggle="tooltip"
              title="Hooray You have chosen right place!">car</a>? Well, we know that with so many options available out
            there, it gets really difficult to find a good car which suits your need. Hence, we have put together a
            complete list of new cars. Maruti Suzuki, Hyundai and Tata are the 3 most popular car brands. The 5 most
            popular cars are <a href="#" data-toggle="tooltip" title="5 Star rated by many people!">Hyundai</a> Exter,
            Maruti Suzuki Fronx, Mahindra Scorpio, Renault Kwid and Maruti Suzuki Invicto. The 5 most popular upcoming
            cars are Mercedes-Benz GLC Facelift, Audi Q8 e-tron, Audi Q8 e-tron Sportback, Volvo C40 Recharge and Honda
            Elevate.`
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toggle {
  margin-top: 50px;
}
</style>
