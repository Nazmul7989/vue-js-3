<template>
<div>
<!--<p>{{ name }}</p>-->
</div>

<!--  ====================== Component =======================-->
<!--  <customComponent></customComponent>-->
<!--  <myHeader></myHeader>-->
<!--  <myFooter></myFooter>-->

<!-- =================== Dynamic Component =========================-->
<!--  <button @click="activeTab = 'home' ">Home</button>-->
<!--  <button @click="activeTab = 'about' ">About</button>-->
<!--  <button @click="activeTab = 'contact' ">Contact</button>-->
<!--  <keep-alive>-->
<!--    <component :is="activeTab"></component>-->
<!--  </keep-alive>-->


<!--  =============== Form Handle =========================-->
<!--  <formHandle></formHandle>-->


<!--======================== props =========================-->
<!--  <demoProp :address="myAddress" @updateLocation="updateAddress"></demoProp>-->


<!-- ==================== slot ======================= -->
<!--  <demoSlot>-->
<!--   <template v-slot:test>-->
<!--     <p>This is a test slot</p>-->
<!--   </template>-->
<!--    <template #carName>-->
<!--      <ul>-->
<!--        <li v-for="car in cars" :key="car">-->
<!--        {{ car }}-->
<!--        </li>-->
<!--      </ul>-->
<!--   </template>-->
<!--  </demoSlot>-->


<!-- ==================== Trahsition =======================-->
<!--  <demoTransition></demoTransition>-->



<!-- ============= Custom Directive =======================-->
<!--  <p v-customDirective></p>-->
<!--  <p v-customDirective="'Hello custom directive global binding'"></p>-->
<!--  <p v-customDirectiveLocal></p>-->
<!--  <p v-customDirectiveLocal="'Hello custom directive local binding'"></p>-->



<!--  ========================= Mixin ==============================-->
<!--  <admin></admin>-->
<!--  <user></user>-->



<!--  ============ Filter =================-->
<!--  <filters></filters>-->

<!--============== Http Request Handle  =====================-->
<!--  <httpRequest></httpRequest>-->

<!--=========== Vue Router ================-->
<!--  <navbar></navbar>-->
<!--  <router-view></router-view>-->

<!--  ========= vuex ==============-->
 <div>
   <bookOne></bookOne>
   <bookTwo></bookTwo>

   <button @click="minimizePrice" class="btn btn-success ml-5">Reduce Price </button>
 </div>


</template>



<script>
//Component
// import customComponent from "@/components/customComponent/customComponent";
// import myHeader from "@/components/component-Register/header";

//Dynamic component
// import home from "@/components/dynamicComponent/home";
// import about from "@/components/dynamicComponent/about";
// import contact from "@/components/dynamicComponent/contact";

// Form Handle
// import formHandle from "@/components/formHandle/form";
//Prop
// import demoProp from "@/components/props/prop";

//Slot
// import demoSlot from "@/components/slot/slots";

//Transition
// import demoTransition from "@/components/transition/transition";

//Mixin
// import admin from "@/components/mixin/admin";
// import user from "@/components/mixin/user";

// Filters
// import filters from "@/components/filters/filters";

//Http Request Handle
// import httpRequest from "@/components/httpRequest/httpRequest";

//Vue Router
// import navbar from "@/components/vueRouter/navbar";

//vuex
import bookOne from "@/components/vuex/bookOne";
import bookTwo from "@/components/vuex/bookTwo";
import {mapActions} from 'vuex'

export default {
  data(){
    return{
      name: 'Nazmul',
      cars: ['bmw','lamborgini','prado','pajero'],
      myAddress: 'Narayankandi',
      activeTab: 'home'
    }
  },
  components: {
    // customComponent,
    // myHeader,
    // demoProp,
    // demoSlot,
    // demoTransition,
    // home,
    // about,
    // contact,
    // admin,
    // user,
    // filters,
    // formHandle,
    // httpRequest,
    // navbar
    bookOne,
    bookTwo

  },

  methods: {
    // updateAddress(){
    //   this.myAddress = 'Jhenaidah'
    // },
    // cutPrice(){
    //   // return this.$store.commit('reducePrice')
    //   return this.$store.dispatch('minimizePrice')
    // }

    ...mapActions([
        'minimizePrice'
    ])

  },
  // directives: {
  //   customDirectiveLocal: {
  //     mounted(el, binding) {
  //       // el.innerText  = 'Hello custom directive local'
  //       el.innerText  = binding.value
  //     }
  //   }
  // }
}
</script>



<style>

</style>
