<template>
<AdminNavBar/>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3>Our Categories</h3>
                <router-link :to="{name:'AddCategory'}"><button class="btn btn-success btn-large" style="float:right">Add Category</button></router-link>
            </div>
        </div>
        
        <div class="row">
            <div v-for="category of categories" :key="category.id" class="col-xl-4 col-md-6 d-flex pt-3">
                <CategoryBox :category="category"></CategoryBox>
            </div>
            
            
        </div>
    </div>
</template>

<script>
import CategoryBox from "@/components/Category/CategoryBox.vue";
import AdminNavBar from "@/components/Admin/AdminNavBar.vue";


export default{
    name: "ViewCategory",
    props: ["baseURL","categories"],
    components: { CategoryBox, AdminNavBar },
    
    mounted(){
       // this.getCategories();
    }
};

</script>

<style>

</style>