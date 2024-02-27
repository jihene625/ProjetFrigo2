<!-- SearchForm.vue -->
<template>
    <form>
        <input type="search" placeholder="Rechercher un produit" v-model="searchCritere"    
        @input="search"  style="width: 50%;">  
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

<style scoped>
form {
  margin-bottom: 20px;
  text-align: center;
}

input {
  width: 50px;
  padding: 5px;
  margin-bottom: 10px;
  text-align: center;
}
</style>