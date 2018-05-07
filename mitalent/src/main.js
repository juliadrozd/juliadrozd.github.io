import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { config } from './firebase/config'
import firebase, { app } from 'firebase'


new Vue({
    el: '#app',
    router,
    render: h => h(App),
    created() {
        firebase.initializeApp(config);
    },
}).$mount('#app')