<!-- AddProductForm.vue -->
<template>
    <div>
      <h2>Ajouter un Nouveau Produit</h2>
      <form @submit.prevent="$emit('addc', libelle)">
        <label for="productName">Nom du Produit:</label>
        <input v-model="newProduct.name" type="text" id="productName" required><br>
  
        <label for="productQuantity">Quantité:</label>
        <input v-model.number="newProduct.quantity" type="number" id="productQuantity" required><br>

        <label for="productPhoto">URL de la Photo:</label>
        <input v-model="newProduct.photo" type="text" id="productPhoto"><br>
  
        <button type="submit">Ajouter au Frigo</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const newProduct = ref({
    name: '',
    quantity: 0,
    photo: '',
  });
  
  const addProduct =  () => {
    try {
      const response = fetch('https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/19/produits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: newProduct.value.name,
          qte: newProduct.value.quantity,
        }),
      });
      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut : ${response.status}`);
      }
      fetchProducts(); // Mettez à jour la liste des produits après l'ajout
      newProduct.value = {}; // Réinitialisez le formulaire
      $emit('addProduct', newProduct.value);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du produit', error);
    }
   
  };
  </script>
  
  <style scoped>
  </style>