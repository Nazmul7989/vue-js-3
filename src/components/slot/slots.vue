<template>
  <slot name="test"></slot>
  <h3>{{ name }}</h3>
  <slot name="carName"></slot>
</template>

<script>
export default {
  data(){
    return{
      name: 'Md Nazmul Hasan'
    }
  }
}
</script>

<style scoped>

</style>