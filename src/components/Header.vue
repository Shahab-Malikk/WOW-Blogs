<template>
<!-- NavBar -->
<nav class="navbar navbar-expand-lg navbar-light " style="background-color:#081624; padding:5px 5%">
  <div class="container-fluid" style="justify-content:space-between">
     <router-link to="/" class="navbar-brand" style="color:white; font-size:40px">W<span >O</span>W</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      <!-- <span class="navbar-toggler-icon"></span> -->
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" style="justify-content:flex-end">
      <ul class="navbar-nav">
          <router-link to="/" activeClass="active" tag="li" class="nav-item"><a class="nav-link active">Home</a></router-link>
          <router-link to="/showBlogs" activeClass="active"  tag="li" class="nav-item"><a class="nav-link">Blogs</a></router-link>
         <router-link to="/addBlogs" activeClass="active" tag="li" class="nav-item"><a class="nav-link ">Add Blog</a></router-link>
        <!-- <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> -->
      </ul>
    </div>
  </div>
</nav>
  <!-- NavBar -->
</template>
<style scoped>
span{
    color:#b01ba5
}
.nav-item{
    padding:3px 15px;
  
 
}
.nav-link{
    color: white !important; 
    font-size: 20px !important;
}
.navbar-nav .router-link-exact-active.nav-item{
    background-color: #b01ba5 !important;
   
}
.fas{
    color: white;
    font-size: 120%;
}
</style>