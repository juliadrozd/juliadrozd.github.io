<template>
  <div id="app">
    <div class="wrapper">
        <app-header />

        <div class="main-content">
          <router-view></router-view>
        </div>
      <app-footer />

    </div>
   
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'
import Clients from './views/Clients.vue'
import News from './views/News'
import Contacts from './views/Contacts'
import Blog from './views/Blog'
import About from './views/About'

import Vue from 'vue'

import { mapGetters } from 'vuex'

export default {
  name: 'app',
   watch: {
    ...mapGetters([
        'profiles',
        'btnValue',
        'isShowList',
    ]),
    },
  data () {
    return {
      
    }
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
    appHome: Home,
    appClients: Clients,
    appNews: News,
    appContacts: Contacts,
    appBlog: Blog,
    appAbout: About,
   

  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700,800');
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,700');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700i');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
@import './components/mixins/_mixins.scss';
* {
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
}

html,
body {
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
}

.wrapper {
    margin: 0 30px;
}

.container {
    margin: 0 auto;
}

.hover-overlay-params {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $accent-color;
    padding: 20px;
     @include small {
        background: rgba(45, 47, 51, .2);
    }
}

.overlay {
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    display: block;
    background: rgba(0, 0, 0, .4);
    z-index: 999;
}

// .body-fixed {
//     overflow: hidden;
//     width: 100%;
// }
.section__title {
    font-family: 'Poppins', sans-serif;
    color: $main-color;
    font-size: 40px;
    line-height: 24px;
    font-weight: 400;
    position: relative;
    margin: 0 0 50px 0;
    padding: 0;
    display: block;
    &:after {
        content: '';
        height: 1px;
        width: 100px;
        background: $main-color;
        position: absolute;
        bottom: -30px;
        left: 46%;
    }
   
}
.address-aside__list {
    height: 300px;
    list-style: none;
    padding: 0;
    flex-flow: column wrap;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
   
}

.address-aside__link {
    color: rgb(26, 26, 29);
    text-decoration: none;
    transition: color .2s ease-in-out;
    font-size: 16px;
    transition: color .2s ease-in-out;
}

.address-aside__link:hover {
    color: rgb(181, 211, 211);
}

</style>
