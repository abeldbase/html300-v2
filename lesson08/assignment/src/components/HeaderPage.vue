<template>
  <div>
    <!--Nav bar section-->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <a class="navbar-brand" href="#">
        <HeaderComponent />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="nav-bar nav">
          <li class="nav-item active">
            <!-- Home link redirects to HomePage component-->
            <router-link to="/" class="nav-link" exact>{{ home }}</router-link>
          </li>
          <li class="nav-item">
            <!-- make link redirects to CarMake component-->
            <router-link to="/make" class="nav-link" exact>{{ make }}</router-link>
          </li>
          <li class="nav-item">
            <!-- model link redirects to CarModel component-->
            <router-link to="/model" class="nav-link" exact>{{ model }}</router-link>
          </li>
          <li class="nav-item">
            <!-- new arrival link redirects to New Arrivals component-->
            <router-link to="/newArrival" class="nav-link" exact>{{ newArrivals }}</router-link>
          </li>
          <li class="nav-item">
            <!-- type link redirects to Type component-->
            <router-link to="/type" class="nav-link" exact>{{ types }}</router-link>
          </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">{{ search }}</button>
        </form>
      </div>
    </nav>

  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
export default {
  components: { HeaderComponent },
  data() {
    return {
      title: 'CarCare',
      home: 'Home',
      make: 'Make',
      model: 'Model',
      newArrivals: 'New Arrivals',
      types: 'Types',
      search: 'Search'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
