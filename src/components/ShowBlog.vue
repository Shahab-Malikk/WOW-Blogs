<template>
<!-- All Blogs -->
    <div class="recent-blogs">
          <h2 style="margin-bottom:15px">All <span>Our</span> Blogs</h2>
          <div class="show-blog-p"><p > Our blog is dedicated to all things curious and creative. Join us everyweek for special C2C Class activities, leading research in the field of creativity and curiosity, and much much more!</p></div>
        <div class="row">
              <div class="search-container">
<div class="search-try">
<i class="fas fa-search"></i><input type="search" placeholder="Search Blog" class="search" v-model="keyword.searchedText" @input="filterSearched()">
</div>

          </div>
          <div id="suggestion">
              <!-- <router-link :to="'/viewBlog/'+blog.id" v-for="(search,index) in searched" :key="index" tag="p" class="suggestions">{{search.title}}</router-link> -->
              <p class="suggestions" v-for="(blog,index) in searched" :key="index" @click="viewBlog(blog)">{{blog.title}}</p>
          </div>
        </div>
            <div class="grid-container">
            <div v-for="blog in blogs" >
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
      <!-- All Blogs -->
</template>
<script>
import Vue from 'vue';
import {mapGetters} from 'vuex';
export default ({
data(){
    return{
        searched:[]

        ,
        keyword:{
            searchedText:''
        },
        newBlogs:[],
       
     
    }
},
    computed:{
        ...mapGetters([
           
            'blogs'
         
        ]),
        id(){
           
           return this.$route.params.id
        },
       
      
    },
    methods:{
//  Search For a Blog with Title
    filterSearched:function(){
this.blogs.forEach(blog=>{
 
if(this.keyword.searchedText!=''){
if(blog.title.includes(this.keyword.searchedText)){

   this.searched.push(blog)

  
}else{
    document.querySelector('#suggestion').innerHTML=''
    console.log('malik')
}
     

}else if(this.keyword.searchedText==''){
   document.querySelector('#suggestion').innerHTML=''
}

  
})
console.log(this.searched)
return this.searched

    },       
        //  View Blog
    viewBlog:function(blog){
   console.log(blog.id)
this.$router.push(`/viewBlog/${blog.id}`)
        } 
               
        

    
    }
    
    
})
        
</script>
<style scoped>
.recent-blogs{
    padding-top: 60px;
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
    box-sizing: border-box;
    border-radius: 1px;
    box-shadow: 0 0 10px rgba(53, 53, 53, 0.3);
    color: rgb(85, 85, 85);
    transition: transform .5s;
  
    padding-top: 0px !important;
    height: 4; 
    border-bottom:2px solid #b01ba5; 
    cursor: pointer;
    height: 400px;
    overflow: hidden;

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
.show-blog-p{
    text-align: center;
    width: 50%;
margin-left: auto;
margin-right: auto;
}
.btn{
    padding: 10px 25px;
    background-color: transparent;

    border-radius: 20px !important;
    border: 2px solid #b01ba5;
    transition: all .5s;
}
.btn:hover{
    background-color: #b01ba5;
    color: white;
     border: 2px solid transparent;
}
.search-container{
   display:flex;
   justify-content: center;
   align-content: center;
 
}
.fas{
    margin-right: 10px;
}
.search-try{
    width: 60%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items:center ;
    vertical-align: center;
    border-radius: 30px;
padding: 15px;
 border: 1px solid #ccc;
}
.search{
font-size: 90%;
width: 100%;
transition: all .5s;
border: none;


}
.search:hover{

width: 102%;
}
*:focus{
    outline: none;
}
.suggestions{
    padding: 10px 15px ;
    border: 1px solid #ccc;
    width: 40%;
    margin: 5px auto;
    cursor: pointer;
    border-radius: 10px;
  
}

@media only screen and (max-width:550px)  {
        
    .grid-container{
        grid-template-columns: repeat(auto-fit, minmax(25rem, min-content));
        grid-gap: 2rem;
        }
    }

</style>
