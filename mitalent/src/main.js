import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router/index'
import { config } from './firebase/config'
import firebase from 'firebase'

Vue.use(VueResource)
Vue.use(VueRouter)

new Vue({
    el: '#app',
    router,
    render: h => h(App),
    created() {
        firebase.initializeApp(config);
    },
})