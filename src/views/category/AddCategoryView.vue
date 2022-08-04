<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center"><h3>Add Category</h3></div>
        </div>
        <div class="row">
            <div class="col-3"> </div>
            <div class="col-6">
                <form>
                <div class="form-group">
                  <label for=""></label>
                  <input type="text" class="form-control" v-model="categoryName" placeholder="Category Name">
                </div>
                <div class="form-group">
                  <label for=""></label>
                  <textarea class="form-control" v-model="description"  cols="4" rows="4"></textarea>
                </div>
                <div class="form-group">
                  <label for=""></label>
                  <input type="text" class="form-control" v-model="imageUrl" placeholder="Upload Image" aria-describedby="helpId">
                </div>
                <button type="button" class="btn btn-primary" @click="addCategory">Sumbit</button>
            </form>

            </div>
            <div class="col-3"> </div>
            
        </div>
    </div>
</template>
<script>
const axios = require("axios");
const sweetalert = require("sweetalert");
export default{
    
    data(){
        return{
            categoryName: "",
            description: "",
            imageUrl: "",
        };

    },
    methods:{
        addCategory(){
            //console.log(this.categoryName, this.description);
            const newCategory = {
                categoryName: this.categoryName,
                description: this.description,
                imageUrl: this.imageUrl,
            };
            const baseURL = "http://localhost:8081";
            axios({
                method: 'POST',
                url: `${baseURL}/api/category/create`,
                data: JSON.stringify(newCategory),
                headers:{
                    "Content-Type":"application/json",
                }
            })
            .then(()=>{
                sweetalert({
                    text: "Category Added Successfully",
                    icon: "success",
                });
            })
            .catch((err) => {
                console.log(err);
            });
            

            
        },
    }
};   

</script>

<style>

</style>