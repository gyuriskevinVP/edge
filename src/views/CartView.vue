<script setup>
import { useBoltStore } from '@/stores/bolt';
const bolt = useBoltStore()
</script>

<template>
    <h2 class="text-danger" v-if="bolt.cart.length == 0">Üres a kosár!</h2>
    <div v-else>
        <table class="table table-striped">
            <tr>
                <th>Termék</th>
                <th>Ár</th>
                <th>Mennyiség</th>
                <th>Összesen</th>
            </tr>
            <tr v-for="product in bolt.cart">
                <td>{{ (bolt.products.find((p) => product.id == p.id).name) }}</td>
            </tr>
        </table>
        <button class="btn btn-danger">Kosár ürítése</button>
    </div>
 <p>&#128465;</p>
</template>
