<template>
 <!--Main navigation-->
            <nav id="navigation" class="nav">
                <ul class="nav__list">
                    <li class="nav__item">
                        <button @click="showMenu" id="menuBtn" class="nav__link--btn">
                            <i class="material-icons">menu</i>
                        </button>
                    </li>
                    <li class="nav__item to__home">
                        <app-back-to-index v-if="$route.name !== 'Home'"/>
                    </li>
                    <li class="nav__item" v-for="(item, key) in nav" :key="key">
                        <router-link :to="item.path" class="nav__link"
                                    router-link-active exact>
                                    {{ item.title }}
                        </router-link>
                    </li>
                </ul>
                <!--./Main navigation-->

                <!--Aside navigation-->
                <transition name="slide-down">
                    <div  v-if="isShowAside" id="js-nav__aside" class="nav__aside">
                        <ul class="nav__aside--list">
                            <li class="nav__aside--item" v-for="(item, key) in aside" :key="key">
                                <router-link :to="item.path" class="nav__aside--link"
                                    router-link-active exact>
                                    {{ item.title }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </transition>
                <!--./Aside navigation-->
                <div v-if="isShowOverlay" @click="closeMenu" class="overlay"></div>
            </nav>
</template>
<script>
import BackToIndex from './BackToIndex'
export default {
    data () {
    return {
    nav: [
        { title: 'Clients', path: '/clients' },
        { title: 'News', path: '/news' },
       
      ],
    aside: [ 
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about'},
        { title: 'Contacts', path: '/contacts' },
        ],
    isShowAside: false,
    isShowBth: false,
    isShowOverlay:false,
    }
  },

  methods: { 
        showMenu() {
          this.isShowAside = this.isShowAside;
          this.isShowOverlay = this.isShowOverlay;
        if (this.isShowAside = true) {
            this.isShowOverlay = true;
        }
      },
      closeMenu() {
            this.isShowAside = false;
            setTimeout(() => { this.isShowOverlay = false; }, 250);
      }
  },
  components: {
          appBackToIndex: BackToIndex,
      }
}
</script>

<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.nav {
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
     @include  small {
    width: 100%;
    margin-bottom: 20px;
    }
}

.nav__list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.nav__item {
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.nav__item:not(:last-child) {
    margin-right: 50px;
}

.nav__link {
    color: rgb(26, 26, 29);
    text-decoration: none;
    transition: color .2s ease-in-out;
}

.nav__link:hover {
    color: rgb(181, 211, 211);
}

.nav__link--btn {
    border: none;
    outline: none;
    background: none;
    font-size: 14px;
    cursor: pointer;
    transition: color .2s ease-in-out;
}

.nav__link--btn:hover {
    color: rgb(181, 211, 211);
}

.nav__aside {
    position: absolute;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: center;
    width: 300px;
    height: calc(100vh + 30px);
    background: #fff;
    z-index: 99999;
    top: -60px;
    left: -30px;
    box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.23);
    padding: 40px 20px;
    transition: transform .3s ease-in-out;
}

.nav__aside--list {
    list-style: none;
    margin: 0;
    padding: 60px 0 0 0;

}

.nav__aside--item:not(:last-child) {
    margin-bottom: 20px;
}

.nav__aside--link {
    text-decoration: none;
    color: rgb(26, 26, 29);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 14px;
    padding: 20px 60px;
    transition: color .2s ease-in-out;
}

.nav__aside--link:hover {
    color: rgb(181, 211, 211);
}
.router-link-active {
    color: $hover-color;
}
.slide-down-enter, .slide-down-leave-active {
    transform: translateX(-100%);
  }
</style>

