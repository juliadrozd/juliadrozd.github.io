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
    left: 0;
    width: 100%;
    @include small {
        flex-flow: column nowrap;
    }
    
}
.main-slider__img {
    margin: 0;
    padding: 0;
    height: auto;
    position: relative;
    z-index: -1;
    left: 130px;
    top: 250px;
    @include responsive(1980px) {
        width: 1500px; 
    }
    @include responsive(1360px) {
        width: 1000px;
        top: 150px;
    }
    @include medium {
        width: 800px;
        top: 0;
    }
    @include small {
        width: 400px;
        top: -50px;
        left: 0;
    }

    
}
.main-slider__txt {
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    bottom: 150px;
    left: 50px;
    @include small {
        bottom: 120px;
        left: 0;
    }
}
.main-slider__title {
    font-size: 70px;
    width: 50px;
    @include small {
        font-size: 50px;
    }
}
.main-slider__descr {
    margin-top: 20px;
    text-transform: uppercase;
    @include small {
        font-size: 18px;
    }
}

</style>
