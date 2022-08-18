<template>
<AdminNavBar/>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center"><h3>Update Category</h3></div>
        </div>
        <div class="row">
            <div class="col-3"> </div>
                <div class="col-6">
                    <form v-if="category" @submit.prevent>
                        <div class="form-group">
                            <label for="categoryName">Category Name</label>
                            <input type="text" class="form-control" v-model="category.categoryName" required>
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea class="form-control" v-model="category.description"  cols="4" rows="4" required></textarea>
                        </div>
                        <div class="form-group">
                            <label>Image</label>
                            <input type="url" class="form-control" v-model="category.imageUrl" required>
                            
                        </div>
                        <br/>
                        <button type="submit" class="btn btn-primary" @click="updateCategory">Update Category</button>
                    </form>
                </div>
            <div class="col-3"> </div>
            
        </div>
    </div>
</template>
<script>
import AdminNavBar from "@/components/Admin/AdminNavBar.vue";
import axios from "axios";
//const axios = require("axios");
const sweetalert = require("sweetalert");
export default{
    components:{AdminNavBar},
    props:["baseURL", "categories"],
    data(){
        return{
            category:  null
        }

    },
    methods: {
        async updateCategory(){
            delete this.category["products"]
            await axios.post(this.baseURL+"/api/category/update/"+this.id, this.category)
            .then(() => {
                //sending event
                this.$emit("fetchData");
                this.$router.push({name:'Category'});
                sweetalert({
                    text:"Category Updated...",
                    icon:"success",
                    closeOnClickOutside: false,
                });
            }).catch(err => console.log(err));

        }
    },
    mounted() {
    
    this.id = this.$route.params.id;
    this.category = this.categories.find(category => category.id == this.id);
    console.log('category', this.category);
  }
    
};   

</script>

<style>

</style>