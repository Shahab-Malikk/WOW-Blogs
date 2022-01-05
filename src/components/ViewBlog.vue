<template>
<div class="section-view">
    <div class="card-top">
        <div class="card-writer">
          <p> <i class="fas fa-feather"></i> {{blog.author}}</p>
        </div>
        <div class="card-published">
           <p>{{blog.date}}</p>
        </div>
        <div class="card-share">
        <i class="fas fa-ellipsis-v" @click="show = !show"></i>
        <div class="share" v-if="show" @click="shared">
        <i class="fas fa-share"></i>    Share Post 
        </div>
        </div>
    </div>
    <div class="card-content">
    <h1 style="margin-bottom:20px">{{blog.title}}</h1>
<p>
    {{blog.description}}
</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium modi sit, aliquam consectetur laboriosam laborum harum quod explicabo doloremque suscipit facere reiciendis sequi cum quos sed commodi magni minus expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vitae, veniam, assumenda quo, atque fuga ipsum officiis quis id ut amet accusamus aliquid nostrum iste. Minus odit architecto tempore sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur amet quisquam autem error quidem, libero praesentium cum facere incidunt, ducimus tempora officiis! Totam ipsam, temporibus deleniti iste neque quo molestiae?</p>
<img src="../assets/blog11.png" alt="">
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium modi sit, aliquam consectetur laboriosam laborum harum quod explicabo doloremque suscipit facere reiciendis sequi cum quos sed commodi magni minus expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vitae, veniam, assumenda quo, atque fuga ipsum officiis quis id ut amet accusamus aliquid nostrum iste. Minus odit architecto tempore sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur amet quisquam autem error quidem, libero praesentium cum facere incidunt, ducimus tempora officiis! Totam ipsam, temporibus deleniti iste neque quo molestiae?</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium modi sit, aliquam consectetur laboriosam laborum harum quod explicabo doloremque suscipit facere reiciendis sequi cum quos sed commodi magni minus expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vitae, veniam, assumenda quo, atque fuga ipsum officiis quis id ut amet accusamus aliquid nostrum iste. Minus odit architecto tempore sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur amet quisquam autem error quidem, libero praesentium cum facere incidunt, ducimus tempora officiis! Totam ipsam, temporibus deleniti iste neque quo molestiae?</p>
    </div>
  <div class="btn-container">
<button class="btn" @click="deleteBlog">Delete Blog</button>

</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default ({
    data(){
return{
    show:false
}
    },
      computed:{
        ...mapGetters([
            'blogs',
           
          
        ]),
        id(){
            console.log(this.$route.params.id)
            return this.$route.params.id
        },
        blog(){
            console.log(this.blogs)
            
return [...this.blogs].find((blog)=>{return blog.id == this.id})
            // return Array.from(this.blogs)
        }
        
    },
    methods:{
        shared(){
            alert('Post Has Been Shared')
        },
        deleteBlog(){
            
            alert('Blog Has Been Deleted From Blogs List')
            const index=[...this.blogs].findIndex((blog)=>{return blog.id == this.id})
            this.blogs.splice(index-1,1)
            
        }
    }
})
</script>
<style scoped>
.section-view{
      width: 80%;
    display:grid;
   
       box-shadow: 0 0 10px rgba(53, 53, 53, 0.3);
    color: rgb(85, 85, 85);
    border-radius: 5px;
    
    padding: 40px 50px;
    margin:40px auto;
}
.card-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    
}
.card-top p{
  font-size: 80% !important;
    
}
.card-top .fas{
  margin-right: 5px !important;
    
}
.card-published{
margin-top: 10px;
    
}
.share{
      box-shadow: 0 0 10px rgba(53, 53, 53, 0.3);
    color: rgb(85, 85, 85);
    padding: 10px 10px;
    position: absolute;
    transform: translateX(-120px);
    font-size: 90% !important ;
    cursor: pointer;
}
.card-content img{
    width: 100%;
    margin: 20px 0;
}
.btn-container{
    margin: 10px auto;
    display: grid;
    grid-row-gap: 1rem;
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

</style>