<template>
 <!--talent-->
    <section class="talent container">
        
        <app-categories />
        <app-cards />

        <button class="talent__explore--btn"> Explore more</button>
    </section>
    <!--./talent-->
</template>
<script>
import Cards from './Cards'
import Categories from './Categories'
export default {
  data: () => ({
}),
  components: {
    appCards: Cards,
    appCategories: Categories,
  }
}
</script>
<style lang="scss" scoped>
.talent {
    text-align: center;
    margin-top: 50px;
}

.talent__explore--btn {
    width: 220px;
    height: 60px;
    border: none;
    outline: none;
    background: rgb(181, 211, 211);
    text-transform: uppercase;
    color: #fff;
    font-size: 14px;
    border-radius: 50px;
    margin-top: 30px;
    cursor: pointer;
    transition: background .3s ease-in-out;
    &:hover {
        background: rgba(45, 47, 51, 0.9);
    }
}
</style>

