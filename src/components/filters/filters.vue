<template>
<div>
  {{ upperCase  }}
</div>
</template>

<script>
export default {
  data(){
    return{
      name: "Md Nazmul Hasan"
    }
  },
  computed: {
    upperCase(){
     return  this.name.toUpperCase().slice(2);
    }
  }
}
</script>

<style scoped>

</style>