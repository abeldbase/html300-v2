import HomePage from './components/HomePage.vue'
import CarMake from './components/CarMake.vue'
import CarModel from './components/CarModel.vue'
import CarousalRepo from './components/CarousalRepo.vue'
import CarTypes from './components/CarTypes.vue'

const Routes = [
    { path: '/', component: HomePage },
    { path: '/make', component: CarMake },
    { path: '/model', component: CarModel },
    { path: '/newArrival', component: CarousalRepo },
    { path: '/type', component: CarTypes }
]
export default Routes