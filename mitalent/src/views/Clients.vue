<template>
  <div class="wrapper">
        <app-slider-clients />
        <section class="categories">
          <!--talent-->
           <!--talent-categories-->
              <div class="talent-caterogies">
                  <app-categories />
                  <app-views />
              </div><!--./talent-categories-->
              <app-talent />
          <!--./talent-->
        </section>
        <!--news-->
        <section class="news container">
        <h1 class="section__title">Latest news</h1>

        <app-articles />

    </section>
    <!--./news-->
  </div>
</template>
<script>
import firebase from 'firebase'
import Articles from '../components/Articles'
import SliderClients from '../components/SliderClients'
import Talent from '../components/Talent'
import Views from '../components/Views'
import Categories from '../components/Categories'

export default {
  name: 'clients',
  data () {
    return {
      }
},
  components: {
    appSliderClients: SliderClients,
    appTalent: Talent,
    appArticles: Articles,
    appViews: Views,
    appCategories: Categories,

  }
}
</script>

<style lang="scss" scoped>
@import '../components/mixins/_mixins.scss';
.categories {
  margin-top: 70px; 
}
.talent__content {
    font-family: 'Poppins', sans-serif;
    margin-top: 35px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
.talent-caterogies{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @include small {
    flex-flow: column nowrap;
  }
}
.news {
    margin-top: 50px;
    text-align: center;
}
</style>
