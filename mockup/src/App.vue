<template>
  <div id="app">

    <app-header />

    <div class="main-content">
        <router-view></router-view>
    </div>

    <app-footer />  
    <div v-show="isShowOverlay" @click="closePopup" class="overlay"></div>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

import Vue from 'vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
  computed: {
        ...mapGetters([
            'isShowOverlay',
            'isShowPopup',
        ]),

    },
    methods: {
        closePopup() {
            if (this.isShowPopup === true) {
                document.body.classList.remove('body--fixed');
                this.$store.dispatch('isPopup', false);
                setTimeout(() => {
                    this.$store.dispatch('isOverlay', false);
                }, 250)
            }
        },  
    },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700,800');
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import './components/mixins/_mixins.scss';
* {
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
}

html,
body {
    width: 100%;
    background: $background;
}

.container {
    width: 1000px;
    margin: 0 auto;
    
    @include large {
        width: 950px;
    }
    @include medium {
        width: 900px;
    }
    @include small {
        width: 700px;
    }
    @include extraSmall {
        width: 100%;
        overflow: hidden;
    }
}
.main-content {
    height: 100%;
}
.section__title {
    font-size: 22px;
    font-weight: 400;
    text-transform: uppercase;
    color: #4999af;
    padding: 0;
    margin: 0 0 20px 0;
    @include  small {
       margin: 20px 0;
    }
}
.body--fixed {
    overflow: hidden;
    display: fixed;
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
</style>
