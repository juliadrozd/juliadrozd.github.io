import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Clients from '../views/Clients'
import News from '../views/News'
import Contacts from '../views/Contacts'
import Blog from '../views/Blog'
import About from '../views/About'
import Profile from '../views/Profile'


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '', component: Home, name: 'Home' },
        { path: '/clients', component: Clients, name: 'Clients' },
        { path: '/news', component: News, name: 'News' },
        { path: '/contacts', component: Contacts, name: 'Contacts' },
        { path: '/blog', component: Blog, name: 'Blog' },
        { path: '/about', component: About, name: 'About' },
        { path: '/profile/:id', component: Profile, name: 'Profile' },
        { path: '*', redirect: '/home' }
    ],
})