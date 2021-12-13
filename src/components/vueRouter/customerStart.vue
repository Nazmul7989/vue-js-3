<template>
<div>
  <ul class="list-group">
    <router-link tag="li" to="/customer/1" class="text-primary text-decoration-underline">Customer 1</router-link>
    <router-link tag="li" to="/customer/2" class="text-primary text-decoration-underline">Customer 2</router-link>
    <router-link tag="li" to="/customer/3" class="text-primary text-decoration-underline">Customer 3</router-link>
  </ul>
</div>
</template>

<script>
export default {
name: "customerStart.vue"
}
</script>

<style scoped>

</style>