<template>
  <div id="app">
      <app-header></app-header>
   
      
 <transition name="slide" mode="out-in">
       <router-view></router-view>
 </transition>
      <app-footer></app-footer>
  
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {

data(){
  return{
    header:'Header'
  }
},
components:{
  appHeader:Header,
  appFooter:Footer
}
}
</script>

<style>
span{
    color:#b01ba5
}
p{
  font-family: 'Poppins', sans-serif  !important;
}
h2{
  font-size: 230% !important;
}
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.25s ease-out forwards;
  transition: opacity 0.25s;
}

.slide-leave-active {
  animation: slide-out 0.25s ease-out forwards;
  transition: opacity 0.25s;
  opacity: 0;
}
.slide-move {
  transition: transform 0.25s;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
