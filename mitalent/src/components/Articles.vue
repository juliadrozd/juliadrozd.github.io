<template>
  <div class="news__content">
            <article class="news__item">
                <span class="news__item--img">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mitalent-b73e5.appspot.com/o/news1.jpg?alt=media&token=59c4aefd-26b7-45fc-a60a-d638f8ee0ed9">
                </span>

                <a href="#" class="news__item--descr">
                    <span class="news__item--title">5 Reasons to keep your beauty salon reservation</span>
                    <span class="news__item--date" data="2018-04-27">8 March, 2020</span>
                </a>
            </article>

            <article class="news__item">
                <span class="news__item--img">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mitalent-b73e5.appspot.com/o/news2.jpg?alt=media&token=68327bda-10f3-46d6-b5bb-45973edb74ef">
                </span>

                <a href="#" class="news__item--descr">
                    <span class="news__item--title">5 Reasons to keep your beauty salon reservation</span>
                    <span class="news__item--date" data="2018-04-27">8 March, 2020</span>
                </a>
            </article>
            <article class="news__item">
                <span class="news__item--img">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mitalent-b73e5.appspot.com/o/news3.jpg?alt=media&token=ab6ef208-bcc0-4cac-932c-59877974ca14">
                </span>

                <a href="#" class="news__item--descr">
                    <span class="news__item--title">5 Reasons to keep your beauty salon reservation</span>
                    <span class="news__item--date" data="2018-04-27">8 March, 2020</span>
                </a>
            </article>
        </div>
</template>
<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.news__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    margin: 0 auto;
}

.news__item {
    width: 30%;
    height: 145px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    @include medium {
        width: 50%;
    }
    @include small {
        width: 100%;
    }
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
