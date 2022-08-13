<template>
    <div class="container">
        <router-link :to="{name:'Category'}">
        <button class="btn btn-primary btn-lg">Admin Category</button>
        </router-link>
        <br />
        <router-link :to="{name:'Product'}">
            <button class="btn btn-primary btn-lg">Admin Products</button>
        </router-link>
    </div>
    
   
</template>
<style>
    .btn{
        margin-bottom: 20px;
    }
</style>