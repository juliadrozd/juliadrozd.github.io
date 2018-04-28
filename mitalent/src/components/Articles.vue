<template>
  <div class="news__content">
            <article class="news__item">
                <span class="news__item--img">
                    <img src="../assets/news1.jpg">
                </span>

                <a href="#" class="news__item--descr">
                    <span class="news__item--title">5 Reasons to keep your beauty salon reservation</span>
                    <span class="news__item--date" data="2018-04-27">8 March, 2020</span>
                </a>
            </article>

            <article class="news__item">
                <span class="news__item--img">
                    <img src="../assets/news2.jpg">
                </span>

                <a href="#" class="news__item--descr">
                    <span class="news__item--title">5 Reasons to keep your beauty salon reservation</span>
                    <span class="news__item--date" data="2018-04-27">8 March, 2020</span>
                </a>
            </article>
            <article class="news__item">
                <span class="news__item--img">
                    <img src="../assets/news3.jpg">
                </span>

                <a href="#" class="news__item--descr">
                    <span class="news__item--title">5 Reasons to keep your beauty salon reservation</span>
                    <span class="news__item--date" data="2018-04-27">8 March, 2020</span>
                </a>
            </article>
        </div>
</template>
<style lang="scss" scoped>
.news__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    width: 1300px;
    margin: 0 auto;
}

.news__item {
    width: 30%;
    height: 145px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.news__item--img {
    margin-right: 20px;
    >img {
        width: 200px;
        height: 139px;
    }
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
