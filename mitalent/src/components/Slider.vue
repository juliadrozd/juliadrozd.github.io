<template>
    <section class="main-slider">

        <address class="address-aside">
            <ul class="address-aside__list">
                <li class="address-aside__item">
                    <a href="#" class="address-aside__link">
                         <i class="fa fa-facebook-official"></i>
                    </a>
                </li>
                <li class="address-aside__item">
                    <a href="#" class="address-aside__link">
                        <i class="fa fa-instagram"></i>
                    </a>
                </li>
                <li class="address-aside__item">
                    <a href="#" class="address-aside__link">
                        <i class="fa fa-youtube-play"></i>
                    </a>
                </li>
                <li class="address-aside__item">
                    <a href="#" class="address-aside__link">
                        <i class="fa fa-twitter"></i>
                    </a>
                </li> 
            </ul>
            <div class="address-aside__counter">02</div>
        </address>
        <button class="main-slider__btn">
            <span class="main-slider__btn--descr">View profile</span>
            <span class="main-slider__btn--icon">
                <i class="fa fa-play"></i>
            </span>
        </button>
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

        
    </section>
  
</template>
<style scoped>
.main-slider {
    width: 100%;
    margin-top: 100px;
    display: flex;
    align-items: flex-start;
    position: relative;
}

.address-aside {
    display: flex;
    flex-flow: column wrap;
    margin-right: 150px;
    height: inherit;
    font-style: normal;
    font-weight: 700;
        
}
.address-aside__list {
    width: 25px;
    height: 400px;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: center;
}

.address-aside__link {
    color: #1a1a1d;
    text-decoration: none;
    transition: color .2s ease-in-out;
    font-size: 16px;
    transition: color .2s ease-in-out;
}
.address-aside__link:hover {
    color: rgba(119,221,211,1);
}
.address-aside__counter {
    margin-top: 100px;
    transform: rotate(-90deg);
}
.main-slider__btn {
    display: flex;
    height: 80px;
    width: 300px;
    border: none;
    outline: none;
    background: none;
    position: absolute;
    bottom: 0;
    padding: 0;
    font-size: 20px;
    text-transform: uppercase;
    z-index: 999;
    cursor: pointer;
}
.main-slider__btn--descr {
    width: 70%;
    height: inherit;
    background: rgba(119,221,211,1);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-slider__btn--icon {
    background: #fff;
    width: 30%;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-slider__item {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
}
.main-slider__img {
    margin: 0;
    padding: 0;
    width: 90%;
    height: 100%;
}
.main-slider__txt {
    position: absolute;
    left: -50px;
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
    width: 200px;
    height: 150px;
    background: #fff;
    position: absolute;
    bottom: 0;
    right: -70px;
    list-style-type: none;
    font-weight: 700;
    font-size: 10px;
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
    left: 40px;
}
.main-content__counter--item--active:before {
     right: 40px;
}

.main-content__counter--item:hover {
    color: #000;
}

</style>
