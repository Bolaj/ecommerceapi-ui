<template>
<AdminNavBar/>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3>Our Products</h3>
                <router-link :to="{name:'AddProduct'}"><button class="btn btn-success btn-large" style="float:right">Add New Product</button></router-link>
            </div>
        </div>
        
        <div class="row">
            <div v-for="product of products" :key="product.id" class="col-xl-4 col-md-6 d-flex pt-3">
                <ProductBox :product="product"></ProductBox>
            </div>
            
            
        </div>
    </div>
</template>

<script>
import ProductBox from "@/components/Product/ProductBox.vue";
import AdminNavBar from "@/components/Admin/AdminNavBar.vue";


export default{
    name: "ProductView",
    props: ["products"],
    components: { ProductBox, AdminNavBar },
    data(){
        return{
            baseURL: "http://localhost:8081",
           
        };
 
    },
    methods:{
        

    },
    mounted(){
       // this.getCategories();
    }
};

</script>

<style>

</style>