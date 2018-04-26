<template>
  <div id="app">
      <app-home />
  </div>
</template>

<script>
import Home from './views/Home.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    appHome: Home,
  },
}
</script>

<style>
  * {
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }
  html, body, #app {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  
</style>
