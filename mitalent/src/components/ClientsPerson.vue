<template>
    <!--main-slider__item-->
    <figure class="main-slider__item">
        <!--main-slider__img-->
        <img class="main-slider__img" :src="personsData.imgPath" alt="img">
        <!--./main-slider__img-->
            
            <!--main-slider__txt-->
        <figcaption class="main-slider__txt">

            <div class="main-slider__txt-wrap">
                <span class="main-slider__descr">{{ personsData.about }}</span>
                <span class="main-slider__title">{{ personsData.name }}</span>
            </div>
               
        </figcaption><!--./main-slider__txt-->

    </figure>
    <!--./main-slider__item-->
</template>
<script>
export default {
    props: ['personsData'],
    data () {
        return {

      }
    },
    
}

</script>

<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.main-slider__item {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column nowrap;
    width: 100%;
}
.main-slider__img {
    margin: 0;
    padding: 0;
    width: 654px;
    height: auto;
    z-index: -1;
            @include responsive(1980px) {
                width: 750px;
                
            }
            @include responsive(1365px) {
                width: 654px;
               
            }
            @include medium {
                width: 450px;
               
            }
            @include small {
                width: 450px;
               
            }
    
}
.main-slider__txt {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    height: 150px;
    margin-top: -30px;
    padding: 20px 20px 20px 60px;
    background: rgba(204, 202, 202, 0.3);
    position: relative;
}
.main-slider__txt-wrap {
    display: flex;
    flex-flow: column;
    width: 70%;
}

.main-slider__title {
    font-size: 30px;
    font-weight: 700;
}
.main-slider__descr {
    font-size: 10px;
    margin-top: 20px;
    text-transform: uppercase;
    position: relative;
    &:before {
        content: '';
        width: 40px;
        position: absolute;
        height: 2px;
        background: $hover-color;
        top: 50%;
        left: -50px;

    }
}

</style>
