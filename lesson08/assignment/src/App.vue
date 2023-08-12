<template>
  <div id="app">
    <HeaderPage />
    <!-- router-view is to bring router components into view -->
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue'

export default {
  components: {
    HeaderPage
  }
}
</script>

<style>
.col-xs-2 {
  border: 1px solid gray;
  background-color: violet
}

.col-sm-3 {
  border: 1px solid gray;
  background-color: orange
}

.col-sm-2 {
  border: 1px solid gray;
  background-color: #32cd32
}

.col-md-2 {
  border: 1px solid gray;
  background-color: purple
}

.col-md-3 {
  border: 1px solid gray;
  background-color: #7fffd4
}

.colHead {
  font-weight: bold
}
</style>
