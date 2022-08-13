<template>
<NavBar/>
  <div class="home">
    <MainBox/>
  </div>
</template>

<script>
import MainBox from '@/components/MainBox.vue';
import NavBar from '@/components/NavBar.vue';
// @ is an alias to /src


export default {
    name: "HomeView",
    components: { MainBox, NavBar }
}
</script>
<style>
 @import '../main.css';
</style>