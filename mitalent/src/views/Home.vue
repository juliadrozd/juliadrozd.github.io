<template id="home-template">
    <div class="wrapper">
        <app-slider />
        <app-talent />
        <app-latestnews />
    </div>
    
</template>
<script>
import Slider from '../components/Slider.vue'
import Talent from '../components/Talent.vue'
import Latestnews from '../components/Latestnews.vue'

export default {
  data: () => ({
}),
  components: {
      appSlider: Slider,
      appTalent: Talent,
      appLatestnews: Latestnews,
  }
}
</script>
