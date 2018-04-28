<template>
  <div class="wrapper">
        <app-social />

        <section class="categories">
          <div class="categories-wrap">
            <app-categories />
          </div>

          <app-cards />
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

import Social from '../components/Social'
import Categories from '../components/Categories'
import Cards from '../components/Cards'
import Articles from '../components/Articles'

export default {
  data: () => ({
}),
  components: {
      appSocial: Social,
      appCategories: Categories,
      appCards: Cards,
      appArticles: Articles,

  }
}
</script>

<style lang="scss" scoped>
.news {
    margin-top: 50px;
    text-align: center;
}
</style>
