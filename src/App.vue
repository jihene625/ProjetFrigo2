<template>
    <h3>Application Gestion Frigo</h3>
    <AddProductForm @addPr="addProduct" />
    <FridgeList />
</template>

<script setup>
import Product from './Product';
import AddProductForm from './components/AddProductForm.vue';
import FridgeList from './components/FridgeList.vue';


const url = 'https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/19/produits'


const addProduct = (nom, qte, photo) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestBody = {
        nom: nom,
        qte: qte,
        photo: photo
    };

    const fetchOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(requestBody),
    };

    fetch(url, fetchOptions)
        .then(response => response.json())
        .then(dataJSON => {
            console.log(dataJSON);
        })
        .catch((error) => {
            console.error(error);
        });
};

</script>

<style>
h3 {
    margin: 15px 0 0;
    font-size: 30px;
    color: rgba(52, 52, 155, 0.73);
}
</style>
