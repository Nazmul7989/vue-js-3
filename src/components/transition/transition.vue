<template>
<transition name="demo" enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__bounceOut">
  <p v-if="seen" class="test">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, optio!</p>
</transition>
  <br>
  <button @click="seen = !seen">Toggle</button>
</template>



<script>
export default {
  data(){
    return{
      seen: true
    }
  }
}
</script>



<style scoped>
.test{
  background-color: teal;
  color: white;
  padding: 7px;
  display: inline-block;
}

.demo-enter-from{
  opacity: 0;
}
.demo-enter-active{
transition: opacity 3s;
}
.demo-leave-from{

}
.demo-leave-active{
  opacity: 0;
  transition: opacity 3s;
}
</style>