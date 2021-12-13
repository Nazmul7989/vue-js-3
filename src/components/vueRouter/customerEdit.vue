<template>
  <div class="container">
    <h3>Customer Edit : {{ $route.params.id }}</h3>

    <h4>Query name: {{ $route.query.name}}</h4>
    <h4>Query analysis: {{ $route.query.analysis}}</h4>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>