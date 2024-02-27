<!-- FridgeList.vue -->
<template>

  <div>
    <h2>Liste des Produits dans le Frigo</h2>
    <SearchForm @search="updateSearchCriteria"></SearchForm>
    <ul>
      <div class="cardContent" v-if="newliste.length === 0">
      <FridgeItem v-for="product in productList"
          :key="product.id"
          :product="product"
          :deletep="deleteProduct"
          :ajoutqte="ajoutqteProduct"
          :supprqte="supprqteProduct" />
      </div>
      <div v-else>
        <FridgeItem v-for="product in newliste"
          :key="product.id"
          :product="product"
          :deletep="deleteProduct"
          :ajoutqte="ajoutqteProduct"
          :supprqte="supprqteProduct" />
      </div>
    </ul>
  </div>
</template>
  
<script setup>
import FridgeItem from './FridgeItem.vue';
import { onMounted, reactive, ref } from "vue";
import Product from '@/Product';
import SearchForm from './SearchForm.vue';

const productList = reactive([]);
const motcle = ref("");
const newliste = reactive([]);
const url = 'https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/19/produits'

function Liste() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json()
    })
    .then((dataJSON) => {
      console.log(dataJSON)
      productList.splice(0, productList.length);
      for (let pr of dataJSON) {
        productList.push(new Product(pr.id, pr.nom, pr.qte, pr.photo))
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
onMounted(() => {
  Liste()
})

function deleteProduct(productId) {
  const fetchOptions = {
    method: 'DELETE',
  };

  fetch(url + "/" + productId, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      Liste()
      fetchProducts();
    })
    .catch((error) => console.log(error));
}

function updateProduct(productId, updatedData) {
  const product = productList.find((p) => p.id === productId);
  const fetchOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: product.id,
      nom: product.nom,
      qte: updatedData.qte, 
      photo: product.photo,
    }),
  };

  return fetch(url, fetchOptions)
    .then((response) => response.json())
    .then((dataJSON) => {
      console.log(dataJSON);
      Liste(); 
      return dataJSON.status;
    })
    .catch((error) => {
      console.log(error);
      return 0;
    });
}
 function ajoutqteProduct(productId) {
   const product = productList.find((p) => p.id === productId);
   const updatedData = { qte: product.qte + 1 };

   updateProduct(productId, updatedData);
 }

function supprqteProduct(productId) {
  const product = productList.find((p) => p.id === productId);
  if (product.qte > 0) {
    const updatedData = { qte: product.qte - 1 };

    updateProduct(productId,updatedData);
  }
}

const updateSearchCriteria = (newCritere) => {
    motcle.value = newCritere;
    searchElements();
};

function searchElements() {
    const fetchOptions = { method: "GET" };
    fetch(url + "?search=" + motcle.value, fetchOptions)
        .then((response) => response.json())
        .then((dataJSON) => {
            newliste.splice(0, newliste.length);
            for (let p of dataJSON) {
                newliste.push(new Product(p.id, p.nom, p.qte, p.photo));
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

</script>
  
<style scoped>
h2 {
  color: #c49d9d;
  margin-bottom: 30px;
  text-align: center;
  margin-top:20px;
}

ul {
  padding: 0;
  list-style:none;
}
.cardContent{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding:15px;
}

</style>
  