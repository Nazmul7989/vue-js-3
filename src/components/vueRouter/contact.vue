<template>
  <div class="container">
    <h3>Contact</h3>
    <h4>Contact parameter : {{ lodededId }}</h4>
    <p>This is a contact section</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab amet at, dolore enim in itaque maiores minus molestias, nam, nesciunt odio odit possimus praesentium quasi qui repellendus sequi sint!Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci blanditiis cumque deserunt distinctio doloremque eligendi eos error fugiat hic, laboriosam necessitatibus similique sint, sit vel. Aspernatur fuga quaerat tempora?</p>

    <button @click="goHome" class="btn btn-primary mt-4 ml-5">Go Home</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lodededId : this.$route.params.id
    }
  },
  methods: {
    goHome(){
      this.$router.push('/')
      this.$router.push({name: 'home'})
    }
  },
  watch: {
    $route(to){
      this.lodededId = to.params.id;
    }
  }
}
</script>

<style scoped>

</style>