<template>
    <div class="media--wrap">
        <app-slider-main />

        <app-news />
        
        <div class="container media__text">
            <app-asside-media />
            <app-article-media />
        </div>

    </div>
</template>
<script>
import SliderMain from '../components/SliderMain.vue'
import News from '../components/News.vue'
import AssideMedia from '../components/AssideMedia.vue'
import ArticleMedia from '../components/ArticleMedia.vue'


export default {
    name: 'media',
    data () {
        return {
      
        }
    },
    components: {
    appSliderMain: SliderMain,
    appNews: News,
    appAssideMedia: AssideMedia,
    appArticleMedia: ArticleMedia,
  }
}
</script>

<style lang="scss" scoped>
@import '../components/mixins/_mixins.scss';
.media__text {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @include  small {
       flex-flow: column;
    }
    @include extraSmall {
        padding: 0 20px;
        }
}
</style>
