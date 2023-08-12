<template>
  <div>
    <h1 slot="header">{{ title }}</h1>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      title: 'CarCare',
    }
  }
}
</script>
<style scoped>
h1 {
  font-weight: bold;
}
</style>

  