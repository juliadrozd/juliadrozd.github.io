<template>
  <div class="wrapper">
        <app-social />

        <section class="categories">
          <app-talent />
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
import Talent from '../components/Talent.vue'
import Articles from '../components/Articles'

export default {
  data: () => ({
}),
  components: {
      appSocial: Social,
      appTalent: Talent,
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
