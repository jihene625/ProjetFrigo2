<!-- FridgeItem.vue -->
<template>
  <li>
    {{ product.pourAfficher() }}
    <div>
      <img :src="product.photo" alt="Product Photo" />
      <p>{{ product.name }} - Quantité: {{ product.quantity }}</p>
    </div>
    <button @click="() => deletep(product.id)">Supprimer</button>
    <button @click="() => addp(chose.id)">ajouter</button>
  </li>
</template>

<script setup>
defineProps(["product", "indexp", "deletep", "addp" ]);


</script>

<style scoped></style>
