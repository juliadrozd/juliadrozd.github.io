import Vue from 'vue';
import { store } from './store/index'
import VueRouter from 'vue-router';
import App from './App.vue';
import { config } from './firebase/Config';
import firebase, { app } from 'firebase';
import Home from './views/Home';
import Clients from './views/Clients';
import News from './views/News';
import Contacts from './views/Contacts';
import Blog from './views/Blog';
import About from './views/About';
import Profile from './views/Profile';

Vue.use(VueRouter);


const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/clients', component: Clients, name: 'clients' },
    { path: '/news', component: News, name: 'news' },
    { path: '/contacts', component: Contacts, name: 'contacts' },
    { path: '/blog', component: Blog, name: 'blog' },
    { path: '/about', component: About, name: 'about' },
    { path: '/profile/:id', component: Profile, name: 'profile' },
    { path: '*', redirect: '/' }
];

const router = new VueRouter({
    routes,
    mode: 'history',
});
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created() {
        firebase.initializeApp(config);
    }
});