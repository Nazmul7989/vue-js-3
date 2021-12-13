<template>
  <div class="container">
    <div class="row bg-info mt-4 px-4 py-4 text-white">
      <div class="col-12">
        <div v-for="book in saleBooks" :key="book.id">
          <span>{{ book.name }}</span>
          <span> ${{ book.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    books(){
      return this.$store.state.books
    },
    // saleBooks() {
    //   return this.$store.getters.saleBooks
    // }

    ...mapGetters([
        'saleBooks'
])
  }

}
</script>

<style scoped>

</style>