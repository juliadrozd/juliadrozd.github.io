<template>
    <header class="main-header">
        <app-nav />
        <app-logo />
        <app-search />
           
    </header>
</template>
<script>
import Nav from './Nav'
import Search from './Search'
import Logo from './Logo'

export default {
  data: () => ({
}),
  components: {
    appNav: Nav,
    appSearch: Search,
    appLogo: Logo,
  }
}
</script>

<style scoped>
.main-header {
    width: 100%;
    margin: 60px 0;
    padding: 0;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>
