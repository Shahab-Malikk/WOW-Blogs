<template>
    
      <div class="recent-blogs">
          <h2>Most <span>Recent</span> Blogs</h2>
            <div class="grid-container">
            <div v-for="blog in homeBlogs" >
     <div class="blog-card" @click="viewBlog(blog)">
        <div class="blog-imgBox"><img :src="require(`../assets/${blog.blogImg}.png`)" alt="" class="blogImg" ></div>
          
          <div class="card-detail">
              <h4 class="blog-title">{{blog.title}}</h4>
       
          <p class="description"><strong>Description</strong>:<br> {{blog.description}}</p>
          </div>

    </div>
        </div>
    </div>
      </div>

    

    
</template>
<script>

import {mapGetters} from 'vuex';
export default ({

    computed:{
        ...mapGetters([
            'homeBlogs',
         
        ])
    },
    methods:{
        viewBlog:function(blog){
this.$router.push(`/viewBlog/${blog.id}`)
        }
    }
})
</script>
<style scoped>
.recent-blogs{
    padding: 60px 0px;
    text-align: center;
}
.grid-container{
    padding: 2rem 0;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(20rem, max-content));
    grid-gap: 4rem; 
}
.blog-card{
    max-width: 20rem;
   
    border-radius: 1px;
    box-shadow: 0 0 10px rgba(53, 53, 53, 0.3);
    color: rgb(85, 85, 85);
    transition: transform .5s;
  
    padding-top: 0px !important;
    height: 4; 
    border-bottom:2px solid #b01ba5; 
    cursor: pointer;

}
.blog-card:hover{
        transform: scale(1.02);


    }
.card-detail{
  padding: 15px 15px; 
}
h4{
    font-family: 'Poppins', sans-serif !important;
    font-size: 130% !important;
}
.blog-imgBox{
    background-color: #b01ba5;
    width: 100%;
    overflow: hidden;
}
.blogImg{
    max-width: 20rem;
    transform: scale(1.1);
    opacity: .8;
    transition: all .5s;
}
.blogImg:hover{

    transform:scale(1);
    opacity: 1;
}
@media only screen and (max-width:550px)  {
        
    .grid-container{
        grid-template-columns: 1fr !important;
        grid-template-rows:1fr 1fr 1fr !important ;
        grid-gap: 2rem;
        }
    }

</style>
