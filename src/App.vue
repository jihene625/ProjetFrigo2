<!-- App.vue -->
<template>
    <div class="navbar">
     <a class="navbar-brand" href="#">
    <header><img src="./assets/frigoIcon.png" class="photo" alt="">Application Gestion Frigo</header>
    
  </a>
</div>
    
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
            location.reload();
        })
        .catch((error) => {
            console.error(error);
        });
};

</script>


<style scoped>
header {
    margin: 0px 0 0;
    font-size: 25px;
    color: #ffffff;
    text-align: center;
    font-family:sans-serif ;
    margin-top: -10px
    
}

.photo{ 
    width: 50px;
    height:50px;
    
}

.navbar{
    background-color: #c8c0bf;
    height: 50px;
}

</style>
