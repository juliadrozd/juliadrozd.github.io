<template>
  <div class="about-wrap">
    
    <!--about-->
    <section class="about">
       <!--about__img-->
      <div class="about__img">
        <img src="https://firebasestorage.googleapis.com/v0/b/mitalent-b73e5.appspot.com/o/about.jpg?alt=media&token=d68cdc09-5de1-4ebe-9e4b-9a3ceac82b6c" alt="about us">
      </div> <!--./about__img-->
      
   
      <!--about__descr-->
      <div class="about__descr">
        <div class="social-wrap">
           <app-social />
        </div>
        <!--about__descr--title-->
        <span class="about__descr--title">
          <span>D</span>
          <p>eveloping the best talent in the comedy<br>
          &entertainment business.</p>
        </span><!--./about__descr--title-->

        <!--about__descr--txt-->
        <span class="about__descr--txt">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, cumque vero. Temporibus nostrum labore culpa accusantium quasi! Tempore commodi debitis, omnis delectus nesciunt, illum quidem aperiam veniam rem tenetur eligendi?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, cumque vero. Temporibus nostrum labore culpa accusantium quasi! Tempore commodi debitis, omnis delectus nesciunt, illum quidem aperiam veniam rem tenetur eligendi?</p>
        </span><!--./about__descr--txt-->
      </div> <!--./about__descr-->
      
      <!--about__features--wrap-->
      <div class="about__features--wrap">
        <div class="about__link-ctc">
          <a href="/contacts">
            <span>Contact us</span>
            <i class="material-icons">person_outline</i>
          </a>
      </div>
      <div class="about__features">
        <span><i>Motivativation</i> is the first step to <i>success</i></span>  
      </div>
     </div><!--./about__features--wrap-->

    </section> <!--./about-->
    <app-about-slider />
  </div> <!--./about-wrap-->
</template>
<script>
import Social from '../components/Social'
import AboutSlider from '../components/AboutSlider'


export default {
  data: () => ({
}),
  components: {
    appSocial: Social,
    appAboutSlider: AboutSlider,
  }
}
</script>

<style lang="scss" scoped>
@import '../components/mixins/_mixins.scss';
.about-wrap {
  z-index: -1;
 &:before {
        content: '';
        width: 770px;
        height: 900px;
        position: absolute;
        top: -300px;
        right: -30px;
        background: rgba(119,221,211,.5);
        z-index: -1;
        @include small {
        width:40px;
    }
    }
}
.about {
   width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -200px;
    left: -100px;
    background: #fff;
    margin-bottom: -100px;
    @include small {
        left: -150px;
    }

}
.about__img {
  font-size: 0;
  > img {
    width: 683px;
    height: 875px;
     @include medium {
        width: 500px;
        height: 675px;
    }
    @include small {
        width: 400px;
        height: 575px;
    }
  }
}
.about__descr {
  display: flex;
  flex-flow: column;
  width: 60%;
  height: inherit;
  position: relative;
  padding: 0 50px 60px 60px;

  @include responsive(1980px) {
         padding: 0 50px 100px 100px;
    }
  @include responsive(1365px) {
        padding: 0 50px 60px 60px;
    }
  @include medium {
        padding: 0 20px 30px 30px;
    }
    @include small {
      padding: 200px 0 0 10px;
      margin-right: -150px;

    }
    
}
.social-wrap {
  position: absolute;
  transform: translateX(-650px);
  z-index: 9;
}
.about__descr--title {
  margin: 0 0 20px 0;
  padding: 0;
  font-size: 22px;
  line-height: 24px;
  font-weight: 500;
  @include flexCenter;
  > span {
    font-size: 60px;
    margin-right: 5px;
     @include responsive(1980px) {
         font-size: 100px;
    }
    @include responsive(1365px) {
        font-size: 60px;
    }
    @include medium {
        font-size: 40px;
    }
    
  }
  > p {
    margin: 0;
    padding: 0;
  }
  @include responsive(1980px) {
         font-size: 30px;
          line-height: 32px;
    }
  @include responsive(1365px) {
        font-size: 22px;
        line-height: 24px;
    }
     @include medium {
        font-size: 18px;
        line-height: 20px
    }
    
}
.about__descr--txt {
  margin-top: 20px;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0,0,0, .8);
   @include responsive(1980px) {
         font-size: 20px;
          line-height: 24px;
    }
  @include responsive(1365px) {
      font-size: 16px;
    line-height: 24px;
    }
    @include medium {
        font-size: 14px;
        line-height: 18px
    }
}
.about__features--wrap {
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
   @include small {
      width: 100%;
      flex-flow: column wrap;
      justify-content: flex-start;
      align-items: flex-start;
      left: 0;
      bottom: 0;
    }
}
.about__link-ctc {
  @include flexCenter;
  padding: 0;
  &:hover {
    background: $accent-color;
  }
  
  > a {
    padding-left: 150px;
    text-decoration: none;
    color: #fff;
    @include flexCenter;
    text-transform: uppercase;
    background: $hover-color;
    transition: color .3s ease-in-out;
    transition: background .3s ease-in-out;

    &:hover {
      color: $hover-color;
      background-color: $accent-color;
      }
      &:hover > i {
      color: $hover-color;
      }
    >i {
      color: $accent-color;
      background: #fff;
      padding: 30px 30px;
      margin-left: 60px;
      transition: color .3s ease-in-out;
    }  
    @include small {
      padding-left: 160px;
    }
  }
}
.about__features {
  font-family: 'Playfair Display', serif;
  text-align: center;
  background: url('https://firebasestorage.googleapis.com/v0/b/mitalent-b73e5.appspot.com/o/planks.jpg?alt=media&token=7983ec6f-87c8-44c0-90c2-11d237951e93');
  background-size: contain;
  width: 350px;
  height: 150px;
  font-size: 18px;
  text-transform: capitalize;
  color: #fff;
  position: relative;
  @include flexCenter;
  flex-flow: column;
  padding: 0 50px;

  &:before {
  background-color: $accent-color;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
}
  > span {
    font-family: 'Playfair Display', serif;
    text-transform: capitalize;
    z-index: 999;
    > i {
      font-family: 'Playfair Display', serif;
      font-weight: 700;

    }
  }
  @include responsive(1980px) {
          width: 500px;
          height: 200px;
          font-size: 30px;
    }
    @include responsive(1365px) {
        width: 350px;
        height: 150px;
        font-size: 18px;
    }
    @include medium {
      width: 300px;
      height: 100px;
      font-size: 18px;
    }
    @include small {
      padding-left: 160px;
      width: 350px;
    }
   
}
</style>
