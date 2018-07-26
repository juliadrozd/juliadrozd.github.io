<template>
    <!--footer-->
    <footer class="main-footer">
        <div class="container">
            <div class="footer__features">
                <!--footer__singup-->
                <div class="footer__singup">
                    <h2 class="footer__title">Sing up to our newsletter</h2>
                    <button class="footer__btn"
                            @click="viewPopup"
                    >Subscribe</button>
                </div>
                <!--./footer__singup-->

                <!--footer__service-->
                <div class="footer__service">
                    <h2 class="footer__title">Service times</h2>
                    <p class="footer__descr">Sundays at 9:30 & 11:30 AM</p>
                    <span class="footer__txt">Lorem ipsum dolor sit amet.</span>
                </div>
                <!--./footer__service-->

                <!--footer__address-->
                <address class="footer__address">
                    <h2 class="footer__title">Connect with us</h2>
                    <div class="footer__address--social">
                        <ul class="address-aside__list">
                            <li class="address-aside__item" v-for="(item, key) in social" :key="key">
                                <router-link :to="item.path" class="address-aside__link"
                                            router-link-active exact>
                                            <img :src="item.imgPath"  :alt="item.title">
                                           
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </address>
                <!--./footer__address-->
            </div>

            <!--footer__footer--copy-->
            <div class="footer--copy">
                &copy Copyright SevenOaks. All rights reserved. 
                <a href="#">Privacy Policy</a>
                <a href="#">Share This</a>
            </div>
            <!--./footer__footer--copy-->

        </div>
        <app-popup />
    </footer>
    <!--./footer-->
</template>
<script>
import Popup from './Popup';
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
    social: [
        {imgPath: './src/assets/facebook.svg', title: 'facebook', path: '/fb'},
        {imgPath: './src/assets/twitter.svg', title: 'twitter', path: '/tw'},
        {imgPath: './src/assets/youtube.svg', title: 'youtube', path: '/yt'},
        {imgPath: './src/assets/paypal.svg', title: 'paypal', path: '/pp'},
        {imgPath: './src/assets/email.svg', title: 'email', path: '/em'},
      ],
    }
  },
  components: {
    appPopup: Popup,
  },
   computed: {
        ...mapGetters([
            'isShowPopup',
            'isShowOverlay',
        ]),

    },
    methods: {
        viewPopup() {
            if (this.isShowPopup === false) {
                document.body.classList.add('body--fixed');
                this.$store.dispatch('isOverlay', true);
                setTimeout(() => {
                    this.$store.dispatch('isPopup', true);
                }, 250)  
            } 
        },  
    },
}
</script>
<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.main-footer {
    width: 100%;
    margin: 50px 0 0 0;
    padding: 30px 0;
    background: $main-color;
    position: relative;
    @include small {
        padding: 15px 0;
    }
}

.footer__features {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 30px;
    border-bottom: 2px solid $light-main;
    color: #ffffff;
    @include small {
        flex-flow: column wrap;
        align-items: center;
    }
}
.footer__title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 20px 0;
    @include small {
        margin: 0;
    }
}
.footer__btn {
    font-family: 'Roboto Condensed', sans-serif;
    width: calc(100% - 10px);
    border: none;
    outline: none;
    background: $hover-color;
    border-radius: 5px;
    color: #f3eeea;
    text-transform: uppercase;
    margin: 0;
    padding: 10px 0;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: opacity .3s ease-in-out;
    &:hover {
        opacity: 0.8;
    }

}
.footer__descr {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
}
.footer__txt {
    font-size: 12px;
    color: $light-main;
}
.footer__service {
     @include small {
        text-align: center;
        margin: 20px 0;
    }
}
.footer__singup {
    text-align: center;
}

.footer__address {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    font-style: normal;
    @include small {
        flex-flow: column wrap;
    }
}

.footer__address--social {
    >ul {
        display: flex;
        flex-flow: row;
        height: inherit;
        list-style: none;
        >li:not(:last-child) {
            margin-right: 5px;
            
            > a {
                text-decoration: none;
            }
        }
    }
}
.footer--copy {
    color: $light-main;
    font-size: 12px;
    margin: 10px 0;

    > a {
        text-decoration: none;
        color: $light-main;
        transition: color .3s ease-in-out;
        padding-right: 5px;
        &:not(:last-child) {
         border-right: 1px solid $light-main;
     }
        &:hover {
            color: #ffffff;
        }

    }
     
}
</style>


