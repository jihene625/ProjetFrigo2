<!-- AddProductForm.vue -->
<template>
    <div>
      <h2>Ajouter un Nouveau Produit</h2>
      <form @submit.prevent="$emit('addPr', newProduct.nom, newProduct.qte, newProduct.photo)">
        <label for="productName">Nom du Produit:</label>
        <input v-model="newProduct.nom" type="text" id="productName" required><br>
  
        <label for="productQuantity">Quantité:</label>
        <input v-model.number="newProduct.qte" type="number" id="productQuantity" required min="0"><br>

        <label for="productPhoto">URL de la Photo:</label>
        <input v-model="newProduct.photo" type="text" id="productPhoto" ><br>
  
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
  h2 {
    color: #c49d9d;
    margin-bottom: 15px;
    text-align: center;
    padding-top: 50px;
  }

  form {
    max-width: 400px;
    margin: auto;
  }

  label {
    display: block;
    margin-bottom: 5px;
    color: #555;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  button {
    background-color: #f44336;
    color: #fff;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
  }
  </style>