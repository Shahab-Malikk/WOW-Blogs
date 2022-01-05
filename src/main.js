import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './routes';
import { store } from './store'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = 'https://blog-app-ea7ed-default-rtdb.asia-southeast1.firebasedatabase.app/'
const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})