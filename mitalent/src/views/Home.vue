<template id="home-template">
    <div class="home">
        <app-slider />
        <app-categories />
        <app-talent />
        <app-latestnews />
    </div>
    
</template>
<script>
import Slider from '../components/Slider'
import Talent from '../components/Talent'
import Latestnews from '../components/Latestnews'
import Categories from '../components/Categories'

export default {
    name: 'home',
    data: () => ({
    }),
    components: {
      appSlider: Slider,
      appTalent: Talent,
      appLatestnews: Latestnews,
      appCategories: Categories,
    }
}
</script>
