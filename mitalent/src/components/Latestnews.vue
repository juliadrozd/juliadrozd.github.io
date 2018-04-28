<template>
  <!--news-->
    <section class="news container">
        <h1 class="section__title">Latest news</h1>

        <app-articles />

        <div class="news-cards">
            <app-newscards />
        </div>
    </section>
    <!--./news-->
</template>
<script>
import Articles from './Articles.vue'
import Newscards from './Newscards.vue'

export default {
  data: () => ({
}),
  components: {
      appNewscards: Newscards,
  }
}
</script>
<style lang="scss" scoped>
.news {
    margin-top: 50px;
    text-align: center;
}
</style>
