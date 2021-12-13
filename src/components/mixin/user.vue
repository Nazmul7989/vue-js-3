<template>
<div>
<h3>{{ name }}</h3>
  <ul>
    <li v-for="mobile in mobiles" :key="mobile">
      {{ mobile }}
    </li>
  </ul>
</div>
</template>

<script>
import {mixin} from "@/components/mixin/mixin";

export default {
  data(){
    return{
      // name: 'Md Nazmul Hasan'
    }
  },
  mixins: [mixin]
}
</script>

<style scoped>

</style>