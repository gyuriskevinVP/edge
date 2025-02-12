import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useBoltStore = defineStore('bolt', () => {
  const products = ref([])
  const cart = ref([])
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }
  const loadProducts = () => {
    axios.get('http://localhost:3000/bolt')
    .then(resp => products.value = resp.data)
  }
  const addToCart = (id) => {
    //console.table(products.value.find((p) => id == p.id))
    
    products.value.find((p) => id == p.id).store -= 1;  //Raktárkészlet csökkentése 1-el
    let o = {'id' : id, 'quatity' : 1}  //id-vel rendelkező termékből veszünk egyet
    let productInCart = cart.value.find((pInCart) => pInCart.id == id)  //Ha még nincs ilyen, akkor "undefined" értéket kapunk
    if (productInCart == undefined){
      cart.value.push(o)
    }else{
      productInCart.quatity += 1
    }
    
  }

  const addNewProduct = (p) => {
    //id-t kell neki adni
    let tmp;
    do {
      let id = Math.round(Math.random() * 1000000000);
      p.id = id
      tmp = products.value.filter((item) => item.id == id)
    } while (tmp.length != 0);
    products.value.push(p)     
    sendProduct(p)
  }

  const sendProduct = (p) => {
    axios.post('http://localhost:3000/bolt',p)
    .then(resp => console.log(resp.status))
  }

  return { cart, products, loadProducts, addToCart , addNewProduct, sendProduct}
})
