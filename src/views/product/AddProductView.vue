<template>
<AdminNavBar/>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center"><h3>Add New Product</h3></div>
        </div>
        <div class="row">
            <div class="col-3"> </div>
            <div class="col-6">
                <form>
                <div class="form-group">
                  <label for=""></label>
                 <select class="custom-select custom-select-lg mb-3 form-control">
                    <option selected>Category</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.categoryName }}</option>
                    
                </select>
                </div>
                <div class="form-group">
                  <label for="">Category Id</label>
                  <input type="text"  class="form-control" v-model="category_id" placeholder="Category Id" aria-describedby="helpId">
                  
                </div>
                <div class="form-group">
                  <label for="">Product Name</label>
                  <input type="text"  class="form-control" v-model="productName" placeholder="Product Name" aria-describedby="helpId">
                  
                </div>
                <div class="form-group">
                  <label for="">Description</label>
                  <textarea class="form-control" v-model="description"  cols="4" rows="4"></textarea>
                </div>
                <div class="form-group">
                  <label for="">Product Image</label>
                  <input type="text" class="form-control" v-model="imageUrl" placeholder="Upload Image" aria-describedby="helpId">
                </div>
                <br/>
                <div class="form-group input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">N</span>
                    </div>
                    <input type="text" class="form-control" v-model="price" aria-label="Amount (to the nearest dollar)">
                    <div class="input-group-append">
                        <span class="input-group-text">.00</span>
                    </div>
                </div>
        
                <br/>
                <button type="button" class="btn btn-success btn-sm btn-block" @click="addProduct">Add New Product</button>
            </form>

            </div>
            <div class="col-3"> </div>
            
        </div>
    </div>
</template>
<script>
import AdminNavBar from "@/components/Admin/AdminNavBar.vue";
const axios = require("axios");
const sweetalert = require("sweetalert");
export default{
    props:["baseURL","categories"],
    components:{AdminNavBar},
    
    data(){
        return{
            id: null,
            category_id: null,
            productName:null,
            description:null,
            imageUrl: null,
            price:null
        };

    },
    methods:{
        addProduct(){
            //console.log(this.categoryName, this.description);
            const newProduct = {
                category_id: this.category_id,
                productName:this.productName,
                description:this.description,
                price:this.price,
                imageUrl: this.imageUrl,
            };
            axios.post(this.baseURL+"/api/product/add", newProduct)
            .then(() => {
                this.$router.push({name:'Product'});
                sweetalert({
                    text: "Product Added Successfully",
                    icon: "success",
                });
            }).catch((err) =>{
                console.log("err", err);
            })
            
            
            
        },
    }
};   

</script>

<style>

</style>