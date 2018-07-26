<template>
    <div class="search-wrap">
        <ul class="search__list">
            <li class="search__item" v-for="(item, key) in ul" :key="key">
                <router-link :to="item.path" class="search__link"
                            router-link-active exact>
                            {{ item.title }}
                </router-link>
            </li>
        </ul>
        <div class="search--main">
            <input type="text" class="search__field">
            <i class="material-icons">search</i>
        </div>
    </div>
</template>
<script>
export default {
    data () {
    return {
    ul: [
        { title: 'Calendar', path: '/calendar' },
        { title: 'Blog', path: '/blog'},
        { title: 'Contact us', path: '/contact' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.search-wrap {
    margin-bottom: 20px;
    @include flexCenter;
    background: rgba(73, 153, 175, .7);
    position: relative;
    left: 30px;
    @include extraSmall {
        left: 15px;
    }

    &::after {
        content: '';
        width: 20px;
        height: 58px;
        position: absolute;
        top: -2px;
        right: 0;
        background: linear-gradient(145deg, transparent 10px, rgba(73, 153, 175, .8) 0) top right,
                    linear-gradient(-35deg, transparent 10px, rgba(73, 153, 175, .8) 0) bottom right;

        background-size: 70% 50%;
        background-repeat: no-repeat;

        @include extraSmall {
        display: none;
        }
    }
   
}
.search__list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 10px 0;
    list-style-type: none;
}
.search__item {
    margin: 0;
    padding: 0 10px;
}
.search__item:not(:last-child) {
 border-right: 1px solid #ffffff;
}

.search__link {
    font-size: 13px;
    font-weight: 700;
    color: #ffffff;
    text-decoration: none;
    transition: color .2s ease-in-out;
   
}


.search__link:hover {
    color: $main-color;
}

.router-link-active {
    color: $main-color;
}
.search--main {
   padding: 0 30px 0 0;
   @include flexCenter;

    &:hover > input {
       border-bottom: 1px solid $main-color;
       }

    &:hover > i {
        color: $main-color;
    }
   > input {
       background: none;
       border: 1px solid transparent;
       outline: none;
       width: 70px;
       font-size: 13px;
        color: #ffffff;
       transition: border .2s ease-in-out;
   }

 
> i {
    margin: 0;
    padding: 10px 0;
    color: $block-color;
    cursor: pointer;
    transition: color .2s ease-in-out;
}
    @include extraSmall {
        display: none;
    }
}

</style>

