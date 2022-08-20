<template>
<AdminNavBar/>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center"><h3>Add New Product</h3></div>
        </div>
        <div class="row">
            <div class="col-3"> </div>
            <div class="col-6">
                <form v-if="product" @submit.prevent>
                <div class="form-group">
                  <label for=""></label>
                 <select class="custom-select custom-select-lg mb-3 form-control">
                    <option selected>Product</option>
                    <option v-for="product in products" :key="product.id" :value="product.id">{{ product.productName }}</option>
                    
                </select>
                </div>
                <div class="form-group">
                  <label for="">Product Id</label>
                  <input type="text"  class="form-control" v-model="product.productId" placeholder="Product Id" aria-describedby="helpId">
                  
                </div>
                <div class="form-group">
                  <label for="">Product Name</label>
                  <input type="text"  class="form-control" v-model="product.productName" placeholder="Product Name" aria-describedby="helpId">
                  
                </div>
                <div class="form-group">
                  <label for="">Description</label>
                  <textarea class="form-control" v-model="product.description"  cols="4" rows="4"></textarea>
                </div>
                <div class="form-group">
                  <label for="">Product Image</label>
                  <input type="text" class="form-control" v-model="product.imageUrl" placeholder="Upload Image" aria-describedby="helpId">
                </div>
                <br/>
                <div class="form-group input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">N</span>
                    </div>
                    <input type="text" class="form-control" v-model="product.price" aria-label="Amount (to the nearest dollar)">
                    <div class="input-group-append">
                        <span class="input-group-text">.00</span>
                    </div>
                </div>
        
                <br/>
                <button type="button" class="btn btn-success btn-sm btn-block" @click="updateProduct">Update Product</button>
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
    props:["baseURL","products"],
    components:{AdminNavBar},
    
    data(){
        return{
            product:  null
        }

    },
    methods: {
        async updateProduct(){
            delete this.product["categories"]
            await axios.post(this.baseURL+"/api/product/update/"+this.id, this.product)
            .then(() => {
                //sending event
                this.$emit("fetchData");
                this.$router.push({name:'Product'});
                sweetalert({
                    text:"Product Updated...",
                    icon:"success",
                    closeOnClickOutside: false,
                });
            }).catch(err => console.log(err));

        }
    },
    mounted() {
    
    this.id = this.$route.params.id;
    this.product = this.products.find(product => product.id == this.id);
    console.log('product', this.product);
  }
    
};   

</script>

<style>

</style>