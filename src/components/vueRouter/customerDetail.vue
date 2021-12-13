<template>
  <div class="container">
    <h3>Customer Details : {{ t=$route.params.id }}</h3>

<!--    <router-link tag="button" :to=" '/customer/'+$route.params.id+'/edit' " class="btn btn-primary">Edit Customer {{ $route.params.id }}</router-link>-->
    <router-link tag="button" :to="{name: 'customerEdit', params: {id: $route.params.id}, query: {name: 'Hello query name', analysis: 1223} }" class="btn btn-primary">Edit Customer {{ $route.params.id }}</router-link>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>