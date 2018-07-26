<template>
    <aside class="media__aside--wrap">
        <h2 class="section__title">Upcoming events</h2>
        <!-- aside__list -->
        <ul class="aside__list" v-if="events.length > 0">
             <!-- aside__item -->
            <li class="aside__item" v-for="(item, key) in events" :key="key">
                <div class="aside__item--wrap">
                    <time class="aside__item--date"
                        :datetime="item.datetime">

                        <p>{{ item.day}}</p>
                        <span>{{ item.month}}</span>
                    </time>
                    <div class="aside__item--descr">
                        <h3>{{item.title}}</h3>
                        <span>{{item.dayWeek}}</span>
                        <time>{{item.time}}</time>
                    </div>
                </div>

                <button class="aside__item--btn">More</button>
            </li>
            <!-- ./aside__item -->
        </ul>
        <!-- ./aside__list -->
    </aside>

</template>
<script>
export default {
  data () {
    return {
    events: [
        {day: '20', month: 'july', datetime: '2018-07-20', title: 'Family day', dayWeek: 'Sunday', time: '9:30am'},
        {day: '20', month: 'july', datetime: '2018-07-20', title: 'Family day', dayWeek: 'Sunday', time: '9:30am'},
        {day: '20', month: 'july', datetime: '2018-07-20', title: 'Family day', dayWeek: 'Sunday', time: '9:30am'},
    ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.media__aside--wrap {
    width: 49%;
    @include  small {
       width: 100%;
    }
}
.aside__item {
    @include flexBetween;
    border-top: 1px solid $light-main;
    padding: 20px 0;
}
.aside__item--wrap {
    @include flexCenter;
}
.aside__item--date {
    @include flexCenter;
    flex-flow: column;
    color: $accent-color;
    margin-right: 20px;
    > p {
        font-size: 32px;
        line-height: 20px;
        margin: 0;
        padding: 0;
    }
    > span {
        font-size: 14px;
        text-transform: uppercase;
    }
}
.aside__item--descr {
    > h3 {
        text-transform: uppercase;
        font-size: 17px;
        color: $red-color;
        font-weight: 400;
    }
    > span {
        font-size: 13px;
        line-height: 9px;
        color: $main-color;
        font-weight: 600;
        padding-right: 5px;
        border-right: 1px solid $main-color;
    }
    > time {
        font-size: 13px;
        color: $main-color;
        font-weight: 400;
    }
}
.aside__item--btn {
    font-size: 16px;
    font-weight: 400;
    color: #f3eeea;
    text-transform: uppercase;
    border: none;
    outline: none;
    border-radius: 3px;
    background: $hover-color;
    padding: 5px 20px;
    cursor: pointer;
    transition: opacity .3s ease-in-out;
    &:hover {
        opacity: 0.8;
    }
}
</style>
