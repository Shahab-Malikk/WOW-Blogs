<template>
<!-- Footer -->
   <div class="footer">
<div class="row">
    <div class="col col-text">
     <h3>World of Words</h3>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, odio quo. Ipsa consequuntur tenetur hic, </p>
     <div class="email">
  <i class="fas fa-envelope"></i> <p>wow@gmail.com</p>
     </div>
        <div class="phone">
 <i class="fas fa-phone-alt"></i> <p>+92-000-1234567</p>
     </div>
    </div>
    <div class="col">
     <h5> About Us</h5>
     <ul class="list">
         <li class="social-links"><a href="">Meet The Team</a></li>
         <li class="social-links"><a href="">What is WOW?</a></li>
         <li class="social-links"><a href="">Our Core Beleief On Learning</a></li>
       
     </ul>
      <h5>Opportunities At WOW</h5>
     <ul class="list">
         <li class="social-links"><a href="">Join Our Team</a></li>
         <li class="social-links"><a href="">Become A Blogger</a></li>
  
       
     </ul>
    </div>
    <div class="col">
     <h5>Get Involved</h5>
     <ul class="list">
         <li class="social-links"><a href="">Donate</a></li>
         <li class="social-links"><a href="">Faq And Policies</a></li>
        
       
     </ul>
    
  <div class="social-icons">
      <i class="fab fa-facebook-square"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-twitter"></i>
  </div>

    </div>
    <div class="developer">
        <p>Copyright &copy; 2022. Developed By <a href="https://github.com/Shahab-Malikk">Shahab Malik</a></p>
    </div>
  </div>
   </div>
   <!-- Footer -->
</template>
<style scoped>

.footer{
    padding: 40px 40px;
    background: linear-gradient(to right, #330d38 0%, #190d36 100%);
    color:white !important;

}
.email,.phone{
    display: flex;
  
 
    
}
.fas{
    margin-right: 10px;
    margin-top: 3px;
    
 
}
p{
    font-size: 90% !important;
    font-weight: 300;
}
.social-icons{
    display: flex;
    text-align: center;
}
.social-icons .fab{
    font-size: 150%;
    margin-right:20px ;
    cursor: pointer;
    transition: all .2s;
    
}
.social-icons .fab:hover{
    font-size: 160%;

    
}
.list{
    list-style: none;
     padding-left: 0 !important;
}
.social-links{
   
    margin-bottom: 15px !important;
   
}
.social-links a{
  text-decoration: none !important;
  font-size: 80%;
  color: white;
  transition: all .2s;
   
}
.social-links a:hover{
 
  font-size: 90%;

   
}
h5{
    margin-bottom: 10px !important;
}
.developer{
    text-align: center;
}
.developer p{
margin-bottom: none;
font-size: 100%;
}
.developer a{
    color: white;
    text-decoration: none !important;
    transition: all .3s;
}
.developer a:hover{
  font-size: 110%;
}
</style>