<template>
    <section class="container news">
        <!-- news__list -->
        <div class="news__list" v-if="news.length > 0">
             <!-- news__item -->
            <figure class="news__item" v-for="(item, key) in news" :key="key">

                <img :src="item.imgPath"  :alt="item.title">

                <figcaption class="news__descr">
                    <h3 class="news__title">{{ item.title }}</h3>
                    <a class="news__link" :href="item.path">
                        <p>{{ item.text }}</p>
                        <img src="../assets/newsbtn.png" alt="go">
                    </a>
                </figcaption>

            </figure>
            <!-- ./news__item -->
        </div>
        <!-- ./news__list -->
    </section>
    
</template>
<script>
export default {
  data () {
    return {
    news: [
        {imgPath: './src/assets/pic1.png', title: 'Stories', text: 'Read stories of SevenOaks', path: '/stories'},
        {imgPath: './src/assets/pic2.png', title: 'Give only', text: 'Quick & easy online giving', path: '/give'},
        {imgPath: './src/assets/pic3.png', title: 'Prayer', text: 'Submit your prayer request', path: '/prayer'},
    ],
    }
  },
  methods: {
   
  }
}
</script>
<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.news {
    margin: 0 auto 30px auto;
    
}
.news__list {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    margin: 0 -20px;
}
.news__item {
    width: 320px;
    height: 200px;
    position: relative;
    margin: 10px;
}

.news__descr {
    position: absolute;
    bottom: 0;
    right: 0;
    > a {
        @include flexCenter;
        padding: 5px;
        color: #ffffff;
        font-size: 16px;
        font-weight: 400;
        text-decoration: none;
        transition: opacity .3s ease-in-out;
        &:hover {
            opacity: .8;
        }
    
        > span {
            padding-right: 10px;
        }
        >img {
            padding: 5px;
            margin: 0;
        } 
    }
}

.news__title {
    text-align: right;
    margin: 0 10px 10px 0;
    font-size: 45px;
    font-weight: 800;
    color: #ffffff;
    text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
}
.news__list {
    > figure:nth-child(1n+1) {
        & .news__link {
            background: rgba(73, 153, 175, .9);
        }   
    }

    > figure:nth-child(2n+2) {
        & .news__link {
            background: rgba(102, 131, 51, .9);
        }   
    }

    > figure:nth-child(3n+3) {
        & .news__link {
            background: rgba(241, 113, 94, .9);
        }   
    }
    
}

</style>
