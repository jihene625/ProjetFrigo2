<template>
    <form>
        <input type="search" placeholder="Rechercher un produit" v-model="searchCritere"
      @input="search"  style="width: 20%;">
    </form>
</template>

<script setup>
import {ref, getCurrentInstance } from 'vue';

const searchCritere = ref('');
const { emit } = getCurrentInstance();
const search = () => {
  emit('search', searchCritere.value);
};
</script>

<style scoped></style>