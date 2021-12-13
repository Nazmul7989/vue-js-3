<template>
  <div class="container">
    <h3>Customer</h3>
    <p class="text-danger">Select a customer to see customer details</p>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  beforeRouteEnter(to,from,next){
  next(true)
  },
  beforeRouteLeave(to,from,next){
    next(true)
  }
}
</script>

<style scoped>

</style>