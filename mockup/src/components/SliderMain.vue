<template>
    <div class="wrapper">
        <section class="slider__container">
        <!-- slider__btn--prev -->
        <button @click="prev" class="slider__btn slider__btn--prev">
            <img src="https://firebasestorage.googleapis.com/v0/b/mockup-646e9.appspot.com/o/btn.png?alt=media&token=dcdbb16c-20bd-4386-a60e-f01cb081cabd" alt="prev">
        </button>
        <!-- ./slider__btn--prev -->

        <!-- slider__list -->
        <div class="slider__list" v-if="slider.length > 0">
             <!-- slider__item -->
            <figure class="slider__item" v-for="(item, key) in slider" :key="key">

                <img :src="item.imgPath"  :alt="item.title">
            
                <!--box--wrap-->
                <div class="container box--wrap">
                    <figcaption class="slider__box">
                        <h1> {{ item.mainText }}
                            <span>{{ item.text }}</span>
                        </h1>
                    </figcaption>
                </div>
                <!--./box--wrap-->

            </figure>
            <!-- ./slider__item -->
        </div>
        <!-- ./slider__list -->

        <!-- slider__btn--next -->
        <button @click="next" class="slider__btn slider__btn--next">
            <img src="https://firebasestorage.googleapis.com/v0/b/mockup-646e9.appspot.com/o/btn.png?alt=media&token=dcdbb16c-20bd-4386-a60e-f01cb081cabd" alt="next">
        </button>
        <!-- ./slider__btn--next -->
        </section>
    </div>
</template>
<script>
export default {
  data () {
    return {
    slider: [
        {imgPath: 'http://csktribes.org/images/slider-001.jpg', title: 'banner1', mainText: 'Welcome to SevenOaks website', text: 'which is run by the friends of SevenOaks.'},
        {imgPath: 'http://csktribes.org/images/slider-001.jpg', title: 'banner2', mainText: 'Banner2', text: 'which is run by the friends of SevenOaks.'},
        {imgPath: 'http://csktribes.org/images/slider-001.jpg', title: 'banner3', mainText: 'Banner3', text: 'which is run by the friends of SevenOaks.'},
      ],
    }
  },
  methods: {
      next() {
        const sliderContainer = document.querySelector('.slider__list');

        let endCount = this.slider.length;
        let currentCount = 1;
        let position = 0;

        endCount = sliderContainer.children.length;
        let sliderItemLast = sliderContainer.lastElementChild;
        let sliderItemFirst = sliderContainer.firstElementChild;
        if (currentCount < endCount) {
            currentCount++;
            position = 0;

            let cloneItem = sliderItemFirst.cloneNode(true);
            cloneItem = sliderContainer.appendChild(cloneItem);

            sliderContainer.removeChild(sliderItemFirst);
            sliderItemFirst = sliderContainer.firstElementChild;
        }
    },
    prev() {
        const sliderContainer = document.querySelector('.slider__list');

        let endCount = this.slider.length;
        let currentCount = 1;
        let position = 0;

        let sliderItemLast = sliderContainer.lastElementChild;
        let sliderItemFirst = sliderContainer.firstElementChild;

        if (currentCount <= endCount) {
            endCount--;
            position = 0;
            let cloneItem = sliderItemFirst.cloneNode(true);
            cloneItem = sliderContainer.appendChild(cloneItem);

            sliderContainer.removeChild(sliderItemFirst);
            sliderItemFirst = sliderContainer.firstElementChild;
          
        }
    },
  }
}
</script>
<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.wrapper {
    display: block;
    height: 670px;

    @include large {
        height: 600px;
    }
    @include medium {
        height: 400px;
    }
    @include  small {
      height: 350px;
    }
    @include extraSmall {
        height: 400px;
    }
    
}
.slider__container {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    align-items: center;
    @include extraSmall {
        position: relative;
        align-items: flex-start;
    }
}
.slider__list {
    width: 100%;
    height: 754px;
    justify-content: flex-start;
    @include large {
        height: 700px;
    }
    @include medium {
        height: 500px;
    }
    @include extraSmall {
        height: 400px;
    }
}

.slider__item {
    padding: 0;
    margin: 0;
    width: 100%;
    height: inherit;
    > img {
        height: 100%;
        @include extraSmall {
            width: 450px;
            height: auto;
        }
    }
}

.slider__btn {
    width: 49px;
    height: 90px;
    border: none;
    outline: none;
    background: $main-color;
    position: absolute;
    @include flexCenter;
    cursor: pointer;
    transition: background .3s ease-in-out;
    z-index: 999;
    @include extraSmall {
        width: 20px;
        height: 45px;
        top: 60px;
    }

    &:hover {
       background: $hover-color; 
    }
}
.slider__btn--prev {
    left: 0;

}
.slider__btn--next {
    right: 0;
    > img {
        transform: rotate(180deg);
    }
}
.box--wrap {
    position: relative;
    transform: translateY(-200%);
    @include medium {
        transform: translateY(-100%);
    }
    @include extraSmall {
            transform: translateY(0);
    }
}
.slider__box {
    padding: 0;
    margin: 0;
    width: 459px;
    background: rgba(67, 146, 168, .8);
    > h1 {
        padding: 10px;
        font-size: 34px;
        font-weight: 800;
        color: #ffffff;
        > span {
            font-weight: 300;
        }
    }
}


</style>
