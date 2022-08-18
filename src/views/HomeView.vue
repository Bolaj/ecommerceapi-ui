<template>
<NavBar/>
  <div class="home">
    <MainBox/>
      <div class="col-12 text-center">
        <h3>Top Categories</h3>
      </div>
      <div class="row">
        <div v-for="index in this.categorySize" :key="index" class="col-xl-4 col-md-6 d-flex pt-3">
          <CategoryBox :category="categories[index-1]" />
        </div>    
      </div>
      
      <div class="container col-12 text-center">
        <h3>Top Products</h3>
      </div>
      <div class="row">
        <div v-for="index in this.productSize" :key="index" class="col-xl-4 col-md-6 d-flex pt-3">
          <ProductBox :product="products[index-1]" />
        </div>    
      </div>
  </div>
</template>

<script>
import MainBox from '@/components/MainBox.vue';
import NavBar from '@/components/NavBar.vue';
import ProductBox from '@/components/Product/ProductBox.vue';
import CategoryBox from '@/components/Category/CategoryBox.vue';
// @ is an alias to /src


export default {
    name: "HomeView",
    components: { MainBox, CategoryBox, ProductBox, NavBar },
    props:["categories","products"],
    data(){
      return{
        categorySize:0,
        productSize:0
      }
    },
    mounted() {
      this.categorySize = Math.min(6, this.categories.length);
      this.productSize = Math.min(8, this.products.length);
    },
}
</script>
<style>
 @import '../main.css';
</style>