<template>
  <div>
    <NewArrivals :carousels="carousels" />
  </div>
</template>

<script>
import NewArrivals from './NewArrivals.vue'

export default {
  components: {
    NewArrivals
  },

  data() {
    return {
      carousels: {
        title: 'New Arrivals',
        images: [{ title: 'Fantasy', alt: 'Fantasy', src: "Fantasy.jpg" }, { title: 'AudiStyle', alt: 'AudiStyle', src: 'AudiStyle.jpg' }, { title: 'Racer', alt: 'Racer', src: 'Racer.jpg' }]
      }
    }
  }
}
</script>
