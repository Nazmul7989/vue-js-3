import { createApp } from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import footer from "@/components/component-Register/footer";
import {routes} from "@/components/vueRouter/routes";
import {createRouter, createWebHistory} from "vue-router";
import {store} from "@/store/store";

const router = createRouter({
    history: createWebHistory(),
    routes,  // routes: routes, or
   scrollBehavior(){
        return{
           top: 0
        }
   }

})

const app = createApp(App)

//vue router
app.use(router)

//vuex
app.use(store)

//Globally import footer component
app.component('myFooter', footer)


//custom directive
app.directive('customDirective',{
    mounted(el,binding){
        // el.innerHTML = 'Hello custom directive global'
        el.innerHTML = binding.value
    }
})



app.mount('#app')

//vue resource and vue router

// app.use('VueRouter',VueRouter)
// app.use('VueResource',VueResource)




