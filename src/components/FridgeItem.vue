<!-- FridgeItem.vue -->
<template>
  <li>
    <div>
      <img :src="product.photo" alt="Product Photo" />
      <p>{{ product.nom }} - Quantité: {{ product.qte }}</p>
    </div>
    <button @click="() => deletep(product.id)">Supprimer</button>
    <button @click="ajoutqte(product.id)">+</button>
    <button @click="supprqte(product.id)">-</button>
  </li>
</template>

<script setup>
const { product, deletep, ajoutqte, supprqte } = defineProps([
  'product',
  'deletep',
  'ajoutqte',
  'supprqte',
]);
</script>

<style scoped></style>
