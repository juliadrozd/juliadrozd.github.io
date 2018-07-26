import Vue from 'vue';
import { store } from './store/index'
import VueRouter from 'vue-router';
import App from './App.vue';

import About from './views/About';
import Media from './views/Media';
import Events from './views/Events';
import Shop from './views/Shop';
import Give from './views/Give';
import Calendar from './views/Calendar';
import Blog from './views/Blog';
import Contact from './views/Contact';

Vue.use(VueRouter);
const routes = [
    { path: '/', component: Media, name: 'media' },
    { path: '/about', component: About, name: 'about' },
    { path: '/media', component: Media, name: 'media' },
    { path: '/events', component: Events, name: 'events' },
    { path: '/shop', component: Shop, name: 'shop' },
    { path: '/give', component: Give, name: 'give' },
    { path: '/calendar', component: Calendar, name: 'calendar' },
    { path: '/blog', component: Blog, name: 'blog' },
    { path: '/contact', component: Contact, name: 'contact' },

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
    render: h => h(App)
});