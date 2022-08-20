<template>
    <div class="card" style="width: 25rem;">
        <img :src="product.imageUrl" class="card-img-top" alt="img">
        <div class="card-body">
            <h5 class="card-title">{{ product.productName }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">N{{ product.price }}</p>
            <router-link id="edit-product" :to="{ name: 'EditProduct', params:{id: product.id} }" v-show="$route.name == 'Product'" class="btn btn-primary">Edit Product</router-link>

        </div>
</div>
</template>

<script>
export default{
    name: "ProductBox",
    props: ["product"],
    methods: {},
};
</script>