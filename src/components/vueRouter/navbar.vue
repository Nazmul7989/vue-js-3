<template>
  <div class="container">
    <nav class="nav bg-info">
      <router-link tag="a" active-class="active" exact class="nav-link" to="/">Home</router-link>
      <router-link tag="a" active-class="active" exact class="nav-link" to="/about">About</router-link>
      <router-link tag="a" active-class="active" exact class="nav-link" to="/contact/1">Contact 1</router-link>
      <router-link tag="a" active-class="active" exact class="nav-link" to="/contact/2">Contact 2</router-link>
      <router-link tag="a" active-class="active" exact class="nav-link" to="/customer">Customer</router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav a{
  color: white;
}
.nav .active{
  color: tomato;
}
</style>