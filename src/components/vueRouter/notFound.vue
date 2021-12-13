<template>
<div class="container text-center mt-5">
  <h1 class="text-danger">Opps! 404 Not Found.</h1>
  <button @click="goHome" class="btn btn-primary mt-4">Go Home</button>
</div>
</template>

<script>
export default {
methods: {
  goHome(){
    this.$router.push('/')
    this.$router.push({name: 'home'})
  }
}
}
</script>

<style scoped>

</style>