<!-- AddProductForm.vue -->
<template>
    <div>
      <h2>Ajouter un Nouveau Produit</h2>
      <form @submit.prevent="$emit('addPr', newProduct.nom, newProduct.qte, newProduct.photo)">
        <label for="productName">Nom du Produit:</label>
        <input v-model="newProduct.nom" type="text" id="productName" required><br>
  
        <label for="productQuantity">Quantité:</label>
        <input v-model.number="newProduct.qte" type="number" id="productQuantity" required><br>

        <label for="productPhoto">URL de la Photo:</label>
        <input v-model="newProduct.photo" type="text" id="productPhoto"><br>
  
        <button type="submit">Ajouter au Frigo</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const newProduct = ref({
    nom: '',
    qte: 0,
    photo: '',
  });
  
  </script>
  
  <style scoped>
  </style>