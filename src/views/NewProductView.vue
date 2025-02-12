<template>
    <h1>Új termék adatai</h1>
    <form @submit.prevent="saveProduct()">
        <input type="text" v-model="name" placeholder="Termék neve">
        <input type="text" v-model="desc" placeholder="Leírás">
        <input type="text" v-model="price" placeholder="Ár a pénznemmel együtt">
        <input type="text" v-model="unit" placeholder="Kiszerelési egység">
        <input type="text" v-model="store" placeholder="raktárkészlet">
        <input type="submit" value="Mentés">
    </form>
</template>
<script setup>
import {ref} from 'vue'
import { useBoltStore } from '@/stores/bolt';
import { useToast } from 'vue-toastification';
const bolt = useBoltStore()
const name = ref()
const desc = ref()
const price = ref()
const unit = ref()
const store = ref()

const toast = useToast()

const saveProduct = () => {
    let p = {"name" : name.value,
             "desc" : desc.value, 
             "price" : price.value, 
             "unit" : unit.value, 
             "store" : store.value}
    
    bolt.addNewProduct(p)
    toast("Mentés sikeres")
    name.value = desc.value = price.value = unit.value = store.value = "";
}
</script>

<style scoped>
    input{ display: block;}
</style>