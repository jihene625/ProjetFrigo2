<!-- FridgeItem.vue -->
<template>
  <div class="card" style="width: 15rem;">
  <img :src="product.photo" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ product.nom }}</h5>
    <p class="card-text">Quantité: {{ product.qte }}</p>
  </div>
  <div class="card-body">
    <div class="product-buttons">
    <button @click="deletep(product.id)">Supprimer</button>
        <button @click="ajoutqte(product.id)">+</button>
        <button @click="supprqte(product.id)">-</button>
  </div>
</div>
</div>
</template>

<script setup>
const { product, deletep, ajoutqte, supprqte } = defineProps([
  'product',
  'deletep',
  'ajoutqte',
  'supprqte',
]);
</script>

<style scoped>
.product-item {
  padding: 10px;
  margin: 10px;
  text-align: center;
}

.product-image {
  max-width: 30%;
  height: auto;
  margin-bottom: 10px;
}

.product-details {
  margin-bottom: 10px;
}

.product-buttons button {
  background-color: #f44336;
  color: white;
  padding: 8px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;
}

.product-buttons button:hover {
  background-color: #d32f2f;
}

.card-img-top{
height: 100%;
}

.card{
  background-color:rgb(242, 230, 226);
  border:0cap;
  
}

</style>

