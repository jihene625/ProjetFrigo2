<template>
    <div>
      <h2>Liste des Produits dans le Frigo</h2>
      <AddProductForm @addp="addProduct"></AddProductForm>
      <ul>
        <FridgeItem
          v-for="(product, index) of productList"
          :key="product.id"
          :product="product"
          :indexp="index"
          :deletep="deleteProduct"
          :addp="addProduct"
        />
      </ul>
    </div>
  </template>
  
  <script setup>
  import FridgeItem from './FridgeItem.vue';
  import { ref } from "vue";
  import { onMounted, reactive } from "vue";
  import Product from '@/Product';
  const productList = ref([]);
  
  const url='https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/19/produits'
    function Liste(){
      fetch(url)
    .then( (response) => {
        return response.json()
    })
    .then((productList) => {
        console.log(productList)
        for (let pr of productList){
            productList.push(new Product(pr.id, pr.name, pr.quantity))
        }
    })
    .catch( (error) =>{
        console.log(error)})
}
onMounted(() => {
    Liste()
})
  
    function deleteProduct (productId) {
     const fetchOptions = {
        method: 'DELETE',
      };

     fetch(url+ "/"+ productId,fetchOptions)
     .then((response)=>{
        return response.json();
    })
    .then((dataJSON) => {
        console.log(dataJSON);
        Liste()
        fetchProducts();
 })
 .catch((error)=> console.log(error));
}

function addProduct(l) {
    let myHeaders = new Headers();
 myHeaders.append("Content-Type", "application/json");
 const fetchOptions = {
 method: "POST",
 headers: myHeaders,
 body: JSON.stringify({ libelle : l }),
 };
 fetch(url,fetchOptions)
 .then((response)=>{
    return response.json();
 })
 .then((dataJSON) => {
        console.log(dataJSON);
 })
 .catch((error)=> console.log(error));

  // -- il faut créer une nouvelle "chsoe" instance de la classe
  productList.push(new Product(l));
}


  </script>
  
  <style scoped>
  /* Ajoutez vos styles ici */
  </style>
  