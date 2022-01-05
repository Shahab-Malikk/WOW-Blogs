<template>
<!-- Add Blog Section -->
  <div class="section-new-blog">
      <h2 style="text-align:center; margin-bottom:30px">Add <span>New</span> Blog</h2>
<div class="container">
    <div class="img-container">
 <img src="../assets/blog1.png" alt="">
    </div>
    <div class="text-container">
        <div class="title-container">
             <label for="title">Blog Title : <br> 
            <input type="title" name="title" id="title" v-model="title" placeholder="Enter Title Here" class="title">
        </label>
        </div>
        <div class="description-container">
<label for="desc">
    Blog Description : <br>
     <textarea name="desc" id="" cols="28" rows="5" v-model="description" placeholder="Enter Description Here"></textarea>
</label>

        </div>
          </div>
             <div class="btn-container"> 
          <button @click="addBlog" class="btn btn-addBlog">Add Blog</button>
      <!-- <button class="btn btn-addBlog" @click="saveData">Save</button> -->
     </div>
    
</div>
  
</div>

     
 
<!-- Add Blog Section -->
</template>
<script>

import {mapGetters} from 'vuex';
export default ({
data(){
return{
    title:'',
    description:'',
    img:'blog4',
}
},
    computed:{
        ...mapGetters([
            'blogs',
         
        ])
    },
    methods:{
        // Function to Add a blog
        addBlog:function(){
if(this.title.length>0 && this.description.length>0){
    this.blogs.push({
    title:this.title,
    description:this.description,
    blogImg:this.img,
    id:Math.floor(Math.random() * 40) + 10,
    author:'Garry Keller',
    date:'27-Nov-2022'
})
alert('Blog Has Been Added')
}else{
    alert('Enter Title and Description of Blog')
}
        },   saveData(){
                const data = {
                    blogs: this.$store.getters.blogs,
                   
                };
                this.$http.put('data.json', data);
        }
    }
} )

</script>

<style scoped>
.section-new-blog{
    padding:60px 0;
}
.container{
    width: 50%;
    display:grid;
    justify-content: center !important;
    align-items: center !important;
       box-shadow: 0 0 10px rgba(53, 53, 53, 0.3);
    color: rgb(85, 85, 85);
    border-radius: 5px;
    padding-bottom: 30px;
}
.img-container img{
    width: 100%;
}
.text-container{
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    
    
    
}

.title{
font-size: 120%;
width: 100%;
transition: all .5s;
border-radius: 10px;
padding: 15px;
 border: 1px solid #ccc;
margin-bottom: 20px;

}
.title:hover{

width: 102%;
}
*:focus{
    outline: none;
}
input[type=text], textarea {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: 1px solid #ccc;

    
}
.btn-container{
    display:grid;
    justify-content: center;
    align-items: center;
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
.btn-addBlog{
    margin-bottom: 10px;
}
</style>