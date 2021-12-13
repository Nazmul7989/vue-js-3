<template>

  <ul>
    <li v-for="car in cars" :key="car">
      {{ car }}
    </li>
  </ul>

  <h3>{{ address }}</h3>
  <button @click="update">Change Address</button>
</template>

<script>

export default {
  props: {
    address: {
      type: String,
      require: true
    },
    cars: {
      type: Array,
      require: true
    }
  },
  methods: {
    update(){
      this.$emit('updateLocation')
    }
  }
}
</script>

<style scoped>

</style>