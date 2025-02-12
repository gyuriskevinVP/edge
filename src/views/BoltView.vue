<template>
      <div>
        <h1>Termékek</h1>
        <div class="row">
          <div class="card col-12 col-sm-6 col-md-4 col-lg-3" v-for="p in bolt.products" :key="p.id">
           <p class="h4">{{ p.name }}</p>
           <div class="card-body">
            <p v-if="parseInt(p.price) > 5000" class="h2 text-center text-danger">{{p.price}}</p>
            <p v-else class="h2 text-center text-primary">{{p.price}}</p>
           </div>
           <div class="card-footer text-center">
            <button @click="bolt.addToCart(p.id)" :disabled="p.store < 1" class="btn btn-outline-primary w-25 mt-3">&#128722;</button>
           </div>
          </div>
        </div>
      </div>  
</template>

<script setup>
import  {ref, onMounted} from 'vue'
import {useBoltStore} from '@/stores/bolt.js'

const bolt = useBoltStore() 
onMounted(() => {
  bolt.loadProducts()
})
</script>
