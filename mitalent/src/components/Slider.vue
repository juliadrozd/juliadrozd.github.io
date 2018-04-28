<template id="slider-section">
    <section class="main-slider">
        <div class="container">
            <app-social />
        <button class="main-slider__btn">
            <span class="main-slider__btn--descr">View profile</span>
            <span class="main-slider__btn--icon">
                <i class="material-icons">change_history</i>
            </span>
        </button>
        </div>

        <div class="figure--wrap">
            <figure class="main-slider__item">
            <img class="main-slider__img" src="../assets/women1.jpg" alt="img">

             <figcaption class="main-slider__txt">
                <span class="main-slider__title">Georgina Alson</span>
                <span class="main-slider__descr">Young model 2020</span>
            </figcaption>
        </figure>
        <ul class="main-content__counter--list">
            <li class="main-content__counter--item">01</li>
            <li class="main-content__counter--item main-content__counter--item--active">02</li>
            <li class="main-content__counter--item">03</li>
        </ul>
        </div>

    </section>
  
</template>
<script>
import Social from './Social'

export default {
  data: () => ({
}),
  components: {
    appSocial: Social,

  }
}
</script>

<style lang="scss" scoped>
.main-slider {
    width: 100%;
    margin-top: 100px;
    display: flex;
    align-items: flex-end;
    
}
.main-slider:before {
        content: '';
        width: 770px;
        height: 719px;
        position: absolute;
        top: 0;
        right: 0;
        background: rgba(119,221,211,.5);
        z-index: -1;
    }

.main-slider__btn {
    display: flex;
    height: 80px;
    width: 300px;
    border: none;
    outline: none;
    background: none;
    padding: 0;
    font-size: 20px;
    text-transform: uppercase;
    z-index: 999;
    cursor: pointer;
    
    &:hover .main-slider__btn--descr {
        background: rgba(45, 47, 51, 0.9);
        color: rgba(119,221,211,1);
    }
    &:hover .main-slider__btn--icon {
        color: rgba(119,221,211,1);
    }

}
.main-slider__btn--descr {
    width: 70%;
    height: inherit;
    background: rgba(119,221,211,1);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color .3s ease-in-out;
    transition: background .3s ease-in-out;
}
.main-slider__btn--icon {
    color: rgba(45, 47, 51, 0.9);
    background: #fff;
    width: 30%;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color .3s ease-in-out;
    > i {
        transform: rotate(90deg);
    }
}
.main-slider__item {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
}
.figure--wrap {
    position: relative;
}
.main-slider__img {
    margin: 0;
    padding: 0;
    width: 90%;
    height: 100%;
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
.main-content__counter--list {
    margin: 0;
    padding: 40px 40px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 240px;
    height: 250px;
    background: #fff;
    list-style-type: none;
    font-weight: 700;
    font-size: 10px;
    position: absolute;
    right: -60px;
    bottom: 0;
}
.main-content__counter--item {
    color: rgba(0,0,0,.5);
    transition: color .2s ease-in-out;
    cursor: pointer;
    position: relative;
}
.main-content__counter--item--active {
    color: #000;
}
.main-content__counter--item--active:after,
.main-content__counter--item--active:before {
    position: absolute;
    content: '';
    width: 20px;
    border-bottom: 2px solid #000;
    top: 50%;
    transition: width .2s ease-in-out;
}
.main-content__counter--item--active:after {
    left: 60px;
}
.main-content__counter--item--active:before {
     right: 60px;
}

.main-content__counter--item:hover {
    color: #000;
}

</style>
