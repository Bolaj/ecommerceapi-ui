<template>

<router-view
    :baseURL="baseURL"
    :categories="categories"
    :products="products"

></router-view>
</template>

<script>
//import NavBar from './components/NavBar.vue'
import axios from 'axios'
export default{
    name:'App',
    components: { },
    data(){
        return{
            baseURL: "http://localhost:8081",
            products: [],
            categories: []

        }
    },
    methods: {
        async fetchData(){
            //api call to get the categories
            await axios.get(this.baseURL + "/api/category/list")
            .then(res => {
                this.categories = res.data
            }).catch((err) => console.log('err', err));

            //api call to get theproducts
            await axios.get(this.baseURL + "/api/product/list")
            .then(res => {
                this.products = res.data
            }).catch((err) => console.log('err', err));
        }
    },
    mounted() {
        this.fetchData();
    },

    
};
</script>

<style>
 
 @import './dashboard.css';

</style>
