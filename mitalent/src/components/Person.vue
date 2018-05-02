<template>
  <figure class="main-slider__item">
            <img class="main-slider__img" :src="personsData.imgPath" alt="img">

             <figcaption class="main-slider__txt">
                <span class="main-slider__title">{{ personsData.name }}</span>
                <span class="main-slider__descr">{{ personsData.about }}</span>
            </figcaption>
    </figure>
</template>
<script>
export default {
  props: ['personsData']
}
</script>

<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.main-slider__item {
    margin-top: 60px;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
}
.main-slider__img {
    margin: 0;
    padding: 0;
    width: 927px;
    height: auto;
    position: relative;
    left: -45px;
    transform: translateX(-45px);
    z-index: -1;
    
}
.main-slider__txt {
    position: absolute;
    left: -150px;
    display: flex;
    flex-flow: column nowrap;
}
.main-slider__title {
    font-size: 70px;
    width: 50px;
}
.main-slider__descr {
    margin-top: 20px;
    text-transform: uppercase;
}

</style>
