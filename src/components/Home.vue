<template>
  <div>
    <!-- Header Section -->
      <div class="gallery">
          <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active item-1" data-bs-interval="10000">
      <!-- <img src="../assets/1.jpg" class="d-block w-100" alt="..."> -->
      
    </div>
    <div class="carousel-item item-2" data-bs-interval="2000">
      <!-- <img src="../assets/2.jpg" class="d-block w-100" alt="..."> -->
      
    </div>
    <div class="carousel-item item-3 ">
      <!-- <img src="" class="d-block w-100" alt="..."> -->
    
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
      </div>
      </div>
      <div class="hero-text">
        <h1 class="mb-md">World <span>Of</span> Words</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quas odio beatae ab exercitationem aliquid accusamus quisquam repudiandae odit ut, nulla distinctio earum maxime sed tempore eos, at, deserunt nihil!</p>
      </div>
  <!-- Header Section -->

<!-- Blogs Section -->
<app-blogs>

</app-blogs>

  </div><!-- Blogs Section -->
</template>
<script>
import TopRatedBogs from './TopRatedBogs.vue'
export default {
    components:{
        appBlogs:TopRatedBogs,
    }
}
</script>

<style scoped>
img{
    width:100%;
    height: 90vh;
  
}

    
.item-1{
  background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
    url('../assets/1.jpg');
  
    height: 70vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: 100% 100%;
   
}
.item-2{
   background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
    url('../assets/2.jpg');

    height: 70vh;
    width: 100%;
    background-repeat: no-repeat;
      background-size: 100% 100%;
}
.item-3{
   background:
    linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
    url('../assets/3.jpg') ;
    background-size: 100% 100%;
    height: 70vh;
    width: 100%;

    
}

.hero-text{
    position: absolute;
    top:50%;
    left: 50%;
    max-width: 90vh;
    transform: translate(-50%,-50%);
}
h1{
    font-size: 500% !important;
    font-weight: 700;
    
    font-family: 'Vujahday Script', cursive;
}
.mb-md{
    margin-bottom: 10px;
}

</style>