<template>
    <div class="card" style="width: 25rem;">
        <img :src="category.imageUrl" class="card-img-top" alt="img">
        <div class="card-body">
            <h5 class="card-title">{{ category.categoryName }}</h5>
            <p class="card-text">{{ category.description }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
</div>
</template>

<script>
export default{
    name: "CategoryBox",
    props: ["category"],
    methods: {},
};
</script>