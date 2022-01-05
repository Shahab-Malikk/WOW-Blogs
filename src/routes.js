import Home from './components/Home.vue';
import ShowBlog from './components/ShowBlog.vue';
import AddBlog from './components/AddBlog.vue';
import ViewBlog from './components/ViewBlog.vue';


export const routes = [
    { path: '/', component: Home },
    {
        path: '/viewBlog/:id',
        component: ViewBlog
    }, { path: '/showBlogs', component: ShowBlog },
    { path: '/addBlogs', component: AddBlog }
];