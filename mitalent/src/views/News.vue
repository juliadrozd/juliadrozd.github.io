<template>
  <div class="news--wrap">
    <section class="news">
      <div class="news__title">
        <img src="https://scontent.fdnk1-2.fna.fbcdn.net/v/t1.0-9/18486296_1960404157527081_6572278440113365535_n.jpg?_nc_cat=0&oh=72a95fe968503968764288713e62f2b7&oe=5B8CEF30" alt="news">
        <span>Featured news</span>
        <h1>Starter guide to self improvement</h1>
        <a href="#">
          Read more
          <span>
            <i class="material-icons">arrow_forward</i>
          </span>
        </a>
      </div>
      <div class="news__articles">
        <div class="news__articles--prev">
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
          <div class="news__articles--small-wrap">
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
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'news',
  data() {
    return {          
    }
},
}
</script>

<style lang="scss" scoped>
@import '../components/mixins/_mixins.scss';
.news--wrap {
  position: relative;
  @include medium {
      &:before {
        content: '';
        width: 200px;
        height: 300px;
        position: absolute;
        top: -300px;
        right: -30px;
        background: rgba(119,221,211,.5);
        z-index: -1;
       
    }
    }
}
.news {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @include medium {
      flex-flow: column;
      @include flexCenter;
    }
}
.news__title {
 
  > img {
    margin: -200px 0 0 -60px;
    width: 750px;
    height: 1100px;
    z-index: -1;
    position: relative;
     
     @include responsive(1367px) {
        width: 550px;
        height: 750px;
        z-index: -1;
    }
  }
  > span {
    position: absolute;
    color: #fff;
    text-transform: uppercase;
    left: 0;
    top: 300px;
    @include medium {
      left: 200px;
    }
  }
  > h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
    position: absolute;
    top: 350px;
    left: 0;
    color: #fff;
    font-size: 40px;
    width: 550px;
    text-transform: capitalize;
    &:after {
      content: '';
      width: 100px;
      height: 5px;
      background: #fff;
      position: absolute;
      bottom: 40px;
      left: 400px;
      @include small {
        bottom: 0;
        left: 100%;
    }
    }
    @include responsive(1367px) {
      top: 280px;
    }
    @include medium {
      left: 200px;
    }
    @include small {
        left: 0;
        width: 100%;
    }
  }
   > a {
      text-decoration: none;
      background: #fff;
      position: absolute;
      left: 270px;
      top: 500px;
      color: $accent-color;
      @include flexBetween;
      font-size: 14px;
      line-height: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      padding: 20px 40px;
      transition: color .3 ease-in-out;
      transition: background .3s ease-in-out;
      >span {
        margin-left: 40px;
      }
      &:hover {
        background: $hover-color;
        color: #fff;
      }
       @include responsive(1367px) {
      left:230px;
      top: 470px;
    }
    @include small {
       left: 0;
    } 
    }

}
.news__articles {
  display: flex;
}
.news__articles--small-wrap {
  width: 60%;
    @include small {
       width: 100%;
       margin-top: 30px;
    } 
}
.news__articles--prev {
  display: flex;
  width: 100%;
  @include small {
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
}
.large-card__container {
    width: 50%;
    height: auto;
    margin: 0 10px 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column;
    @include medium {
      width: 30%;
    }
    @include small {
         width: 100%;
    }
   
}

.large__item--img {
    width: 100%;
    display: block;
    position: relative;
  
     @include responsive(1980px) {
         height: 750px;
    }
     @include responsive(1370px) {
        height: 500px;
        margin: 0 5px;
    }
    @include medium {
        height: 350px;
    }
     @include small {
        height: 480px;
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

.news__descr-large-wrap {
    text-decoration: none;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
}


.news__item {
    width: 100%;
    height: 145px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    @include medium {
        width: 100%;
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
