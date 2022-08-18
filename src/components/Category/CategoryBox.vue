<template>
    <div class="card" style="width: 25rem;">
        <img :src="category.imageUrl" class="card-img-top" alt="img">
        <div class="card-body">
          <h5 class="card-title">{{ category.categoryName }}</h5>
            
          <p class="card-text">{{ category.description }}</p>
          <router-link id="edit-category" :to="{ name: 'EditCategory', params:{id: category.id} }" v-show="$route.name == 'Category'" class="btn btn-primary">Edit Category</router-link>
        </div>
</div>
</template>

<script>
export default {
  name: "CategoryBox",
  props: ["baseURL","category"],
  
};
</script>