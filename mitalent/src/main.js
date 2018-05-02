import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import { config } from './firebase/config'
import firebase from 'firebase'

Vue.use(VueResource)

new Vue({
    el: '#app',
    router,
    render: h => h(App),
    created() {
        firebase.initializeApp(config);
    },
    components: { App },
    template: '<App/>'
})