<template>
  <div class="container">
    <header class="main-header">
        <div class="logo--wrap">
            <app-logo />
        </div>
        <div class="main-right">
          <app-search />
          <app-nav />
        </div>
        

           
    </header>
  </div>
    
</template>
<script>
import Nav from './Nav'
import Logo from './Logo'
import Search from './Search'


export default {
  data: () => ({
}),
  components: {
    appNav: Nav,
    appLogo: Logo,
    appSearch: Search,
  }
}
</script>

<style lang="scss">
@import './mixins/_mixins.scss';
.main-header {
    width: 100%;
    margin: 0;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background: $block-color;
    z-index: 999;

    @include  small {
      display: flex;
      flex-flow: column;
      align-items: center;
    }
}
.logo--wrap {
  width: 30%;
}
.main-right {
  width: 70%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-end;

  @include  small {
      width: 100%;
  }
}
</style>
