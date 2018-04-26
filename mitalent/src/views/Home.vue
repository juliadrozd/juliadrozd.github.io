<template>
    <app-header />
    
    
</template>
<script>
import Header from '../components/Header.vue'
import Talent from '../components/Talent.vue'

export default {
  data () {

  },
  components: {
      appHeader: Header,
      appTalent: Talent,
  }
}
</script>