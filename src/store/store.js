import {createStore} from "vuex";


export const store = createStore({
    state(){
      return{
          books: [
              {name: 'Harry Porter', price: 100},
              {name: 'Gitangali', price: 200},
              {name: 'Bisher Bashi', price: 300},
              {name: 'Aguner Porosmoni', price: 400}
          ]
      }
    },
    getters: {
        saleBooks(state){
            let reducePrice = state.books.map((book)=>{
                return {
                    name: book.name,
                    price: book.price/2
                }
            })
            return reducePrice
        }
    },
    mutations: {
        reducePrice(state){
            return state.books.forEach((book)=>{
                book.price -= 1
            })
        }
    },
    actions: {
        minimizePrice(context){
           setTimeout(()=>{
               context.commit('reducePrice')
           },2000)
        }
    }
})