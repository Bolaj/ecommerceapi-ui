<template>
  <div class="header">
    <div class="menu-bar">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#" style="color:#fff">Demo Ecommerce</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Products</router-link>
            </li>
            <li class="nav-item">
             <router-link class="nav-link" to="/signup">Orders</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Accounts
              </a>
              <div class="dropdown-menu">
                <router-link class="dropdown-item" to="/login">Login</router-link>
                <router-link class="dropdown-item" to="/signup">Signup</router-link>
              </div>
            </li>
          </ul>
        </div>
       </nav>
    </div>
  </div>
</template>

 <script>
        export default{
            name:"NavBar"
            
        }

    </script>
<style>

</style>