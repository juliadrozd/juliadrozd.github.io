<template>
  <div class="news__grid-wrap">
                <div class="cards-wrap">
                    <article class="trend-card trend-card__container">
                        <a href="#" class="news__descr-trend-wrap">
                            <i class="material-icons">change_history</i>
                            <span class="news__trend--title">5 Reasons to keep your beauty salon reservation</span>
                            <span class="news__trend--date" data="2018-04-27">8 March, 2020</span>
                        </a>
                        <span class="trend__item--img">
                            <img class="trend-card__img" src="https://firebasestorage.googleapis.com/v0/b/mitalent-b73e5.appspot.com/o/newsB2.jpg?alt=media&token=d978f5a5-104d-4562-8ad6-7fdee67fc8f2">
                             <span class="trend-card__lable">Trending</span>
                        </span>
                    </article>

                    <article class="small-card small-card__container">
                        <span class="small__item--img">
                                    <img class="small-card__img" src="https://firebasestorage.googleapis.com/v0/b/mitalent-b73e5.appspot.com/o/news2.jpg?alt=media&token=68327bda-10f3-46d6-b5bb-45973edb74ef">
                                </span>
                        <a href="#" class="news__descr-small-wrap">
                            <span class="news__item--title">5 Reasons to keep your beauty salon reservation</span>
                            <span class="news__item--date" data="2018-04-27">8 March, 2020</span>
                        </a>
                    </article>

                    <article class="medium-card medium-card__container">
                        <span class="medium__item--img">
                            <img class="medium-card__img" src="https://firebasestorage.googleapis.com/v0/b/mitalent-b73e5.appspot.com/o/newsB3.jpg?alt=media&token=42efd7cb-a547-490c-930a-4626e4b0638d">
                            <ul class="medium-card__dots--list">
                                <li class="medium-card__dots--item"></li>
                                <li class="medium-card__dots--item"></li>
                                <li class="medium-card__dots--item"></li>
                                <li class="medium-card__dots--item"></li>
                            </ul>
                            <a href="#" class="medium__descr-link-wrap">
                                <span class="medium__btn">
                                    <i class="material-icons">change_history</i>
                                </span>
                        <span class="medium-descr">Play all</span>
                        </a>
                        </span>

                    </article>
                </div>
                <article class="large-card large-card__container">
                    <span class="large__item--img">
                        <img class="large-card__img" src="https://firebasestorage.googleapis.com/v0/b/mitalent-b73e5.appspot.com/o/newsB1.jpg?alt=media&token=eaf39cd6-69c9-4157-9b92-2c25dadeeaef">
                        <ul class="large-card__dots--list">
                            <li class="large-card__dots--item"></li>
                            <li class="large-card__dots--item"></li>
                            <li class="large-card__dots--item"></li>
                        </ul>
                    </span>
                    <a href="#" class="news__descr-large-wrap">
                        <span class="news__item--title">5 Reasons to keep your beauty salon reservation</span>
                        <span class="news__item--date" data="2018-04-27">8 March, 2020</span>
                    </a>
                </article>



            </div>
</template>
<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.news__grid-wrap {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
   
}

.cards-wrap {
    width: 60%;
    margin-left: 30px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    @include medium {
        width: 100%;
    }
    @include small {
        margin: 0;
    }
}

.trend-card__container {
    margin: 0 0 0 30px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    width: 100%;
    
    
    @include responsive(1980px) {
        height: 400px;
    }
    @include responsive(1370px) {
        height: 300px;
        margin-bottom: 10px;
    }
    @include small {
        height: 150px;
        margin: 0 0 10px 0;
    }

}

.news__descr-trend-wrap {
    width: 40%;
    height: inherit;
    margin: 0;
    padding: 30px;
    background: rgb(181, 211, 211);
    color: #fff;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: flex-end;
    text-decoration: none;
    @include small {
        padding: 10px;
        justify-content: center;
    }
    >i {
        transform: rotate(90deg);
        transition: color .3s ease-in-out;
    }
    &:hover .news__trend--title {
        color: rgba(45, 47, 51, 0.9);
    }
    &:hover>i {
        color: rgba(45, 47, 51, 0.9);
    }
    
}

.news__trend--title {
    text-align: left;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    margin: 30px 0;
    transition: color .3s ease-in-out;
    @include small {
        font-size: 16px;
        line-height: 18px;
    }
}

.news__trend--date {
    font-size: 12px;
}

.trend__item--img {
    width: 60%;
    height: inherit;
    display: block;
    position: relative;
    >img {
        width: 100%;
        height: inherit;
    }
}

.trend-card__lable {
    background: #fff;
    color: rgb(26, 26, 29);
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 2px;
    padding: 10px 30px;
    position: absolute;
    top: 10px;
    right: 10px;
}

.large-card__container {
    width: 30%;
    height: auto;
    margin: 0 30px 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column;
    @include small {
        width: 50%;
    }
   
}

.large__item--img {
    width: 100%;
    display: block;
    position: relative;
     @include responsive(1980px) {
        height: 820px;
    }
     @include responsive(1370px) {
        height: 550px;
        margin: 10px 5px;
    }
    @include medium {
        height: 400px;
    }
     @include small {
        height: 280px;
    }
    >img {
        width: 100%;
        height: inherit;
    }
}

.large-card__dots--list {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    position: absolute;
    bottom: 0;
    left: 36%;
    >li {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
        transition: transform .5s ease-in-out;
        &:hover {
            transform: scale(2);
        }
    }
}

.large-card__dots--item:not(:last-child) {
    margin-right: 10px;
}

.news__descr-large-wrap,
.news__descr-small-wrap {
    text-decoration: none;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
}

.small-card__container {
    width: 35%;
    height: auto;
    margin: 0 15px 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column;
    @include responsive(1365px) {
        width: 40%;
        height: auto;
        margin: 0 5px 0 5px;
    }
}

.small__item--img {
    width: 100%;
    
    display: block;
    position: relative;
    @include responsive(1980px) {
        height: 250px;
    }
     @include responsive(1370px) {
        height: 220px;
    }
     @include small {
        height: 100px;
    }
    >img {
        width: 100%;
        height: inherit;
    }
}

.medium-card__container {
    width: 48%;
    margin: 0 15px 0 15px;
     display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column;
    @include responsive(1980px) {
        height: 430px;
    }
     @include responsive(1370px) {
         width: 50%;
        height: 330px;
        margin: 0 5px;
    }
    @include small {
        height: 170px;
    }
}

.medium__item--img {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    >img {
        width: 100%;
        height: inherit;
    }
}

.medium-card__dots--list {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    position: absolute;
    bottom: 40%;
    right: 15px;
    >li {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
        transition: transform .5s ease-in-out;
        &:hover {
            transform: scale(2);
        }
    }
}

.medium-card__dots--item:not(:last-child) {
    margin-bottom: 10px;
}

.medium__descr-link-wrap {
    text-decoration: none;
    color: #fff;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 30px;
    bottom: 50px;
    transition: color .3s ease-in-out;
    &:hover {
        color: rgba(45, 47, 51, 0.9);
    }
    &:hover .medium__btn {
        border-color: rgba(45, 47, 51, 0.9);
    }
}

.medium__btn {
    width: 50px;
    height: 50px;
    border: 1px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5px;
    transition: border-color .3s ease-in-out;
    >i {
        transform: rotate(90deg);
    }
}

.medium-descr {
    margin-left: 20px;
    text-transform: uppercase;
}
.news__item--descr {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-flow: row wrap;
    height: inherit;
}

.news__item--title {
    text-align: left;
    color: rgb(26, 26, 29);
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    text-transform: capitalize;
    transition: color .3s ease-in-out;
    &:hover {
        color: rgb(181, 211, 211);
    }
}

.news__item--date {
    font-size: 12px;
    color: rgba(26, 26, 29, .5);
}
</style>
