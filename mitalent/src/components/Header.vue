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
    position: relative;
}
.main-header:before {
        content: '';
        width: 770px;
        height: 719px;
        position: absolute;
        top: -300px;
        right: -60px;
        background: rgba(119,221,211,.5);
        z-index: -1;
    }

</style>
