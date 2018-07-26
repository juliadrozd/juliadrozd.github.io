<template>
 <!--Main navigation-->
    <nav id="navigation" class="nav">
        <ul class="nav__list">
            <li class="nav__item" v-for="(item, key) in nav" :key="key">
                <router-link :to="item.path" class="nav__link"
                            router-link-active exact>
                            {{ item.title }}
                </router-link>
            </li>
        </ul>
        <!--./Main navigation-->
    </nav>
</template>
<script>
export default {
    data () {
    return {
    nav: [
        { title: 'About', path: '/about' },
        { title: 'Media', path: '/'},
        { title: 'Events', path: '/events' },
        { title: 'Shop', path: '/shop' },
        { title: 'Give', path: '/give' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
     @include extraSmall {
         width: 100%;
        @include flexCenter;
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
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
}

.nav__item:not(:last-child) {
    margin-right: 50px;

    @include extraSmall {
         margin-right: 20px;
    }
}

.nav__link {
    color: $accent-color;
    text-decoration: none;
    transition: color .2s ease-in-out;
}

.nav__link:hover {
    color: $hover-color;
}

.router-link-active {
    color: $hover-color;
}

</style>

