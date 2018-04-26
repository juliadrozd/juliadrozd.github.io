<template>
    <header class="main-header">
        <div class="container">
            <app-nav />
             <app-slider />
        </div>
    </header>
</template>
<script>
import Nav from './Nav.vue'
import Slider from './Slider.vue'

export default {
  data () {
    
  },
  components: {
    appNav: Nav,
    appSlider: Slider,
  }
}
</script>

<style scoped>
    .main-header {
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
    }
    .main-header:before {
        content: '';
        width: 770px;
        height: 719px;
        position: absolute;
        top: 0;
        right: 0;
        background: rgba(119,221,211,.5);
        z-index: -1;
    }
    .container {
        margin: 60px 70px;
    }
</style>
