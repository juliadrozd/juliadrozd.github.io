<template>
  <div class="contacts-wrap">
    <section class="contacts">
      <!--contacts__img-->
      <div class="contacts__img">
        <img src="https://scontent.fdnk1-2.fna.fbcdn.net/v/t1.0-9/22489872_1470806702968695_4082601131035702407_n.jpg?_nc_cat=0&oh=b7f4d38cd8d45559e08a493da50f6f5e&oe=5B8A4C8B" alt="about us">
        <div class="contacts__title--wrap">
          <span class="contacts__title">Contact us</span>
          <span class="contacts__title--descr">Mass impressions</span>
        </div>
        <!--contacts__features--wrap-->
        <div class="contacts__features--wrap">
          <div class="contacts__link-ctc">
            <a href="#">
              <span>Get direction</span>
              <i class="material-icons">location_on</i>
            </a>
          </div>
        </div><!--./contacts__features--wrap-->
      </div> <!--./contacts__img-->
      <!--contacts__descr-->
      <div class="contacts__descr">
        <!--contacts__descr--title-->
        <span class="contacts__descr--title">
          <span>W</span>
          <p>e would love to hear from you, wether you want more information an any of our acts or wish to discover how our artists can support your event.</p>
        </span><!--./contacts__descr--title-->

        <!--contacts-address-->
        <address class="contacts-address">
          <div class="contacts-address__item">
            <span>
              <i class="material-icons">business</i>
            </span>
            <div> 
              <p>79-81 Berkeley Square </p>
              <p>London</p>
              <p>WC923 9TT</p>
            </div>
          </div>
          <div class="contacts-address__item">
            <span>
              <i class="material-icons">call</i>
            </span>
            <div> 
              <p href="tel:4402345678910">+44 (0) 234 567 8910</p>
              <p href="tel:4402345678910">+44 (0) 234 567 8910</p>
            </div>
          </div>
          <div class="contacts-address__item">
            <span>
              <i class="material-icons">mail_outline</i>
            </span>
            <div> 
              <p href="hello@mitalent.com">hello@mitalent.com</p>
            </div>
          </div>
        </address><!--./contacts-address-->
      </div> <!--./contacts__descr-->
    </section>
  </div>
</template>
<script>
export default {
  name: 'contacts',
  data: () => ({
  })
}
</script>

<style lang="scss" scoped>
@import '../components/mixins/_mixins.scss';
.contacts-wrap {
  z-index: -1;
  margin-bottom: -170px;
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
.contacts {
   width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -200px;
    left: -100px;
    background: #fff;
    @include small {
        flex-flow: column wrap;
        left: 0;
    }
}
.contacts__img {
  font-size: 0;
  position: relative;
  > img {
    width: 683px;
    height: 875px;
    @include medium {
        width: 500px;
        height: 650px;
    }
    @include small {
        width: 450px;
        height: 575px;
    }
  }
}
.contacts__title--wrap {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    top: 20%;
    left: 100px;
    color: #fff;
    padding: 0 60px;
    @include medium {
        top: 30%;
        left: 70px;
    }
    @include small {
      top: 40%;
      left: 0;
      color: #fff;
    }
}
.contacts__title {
  font-size: 100px;  
  position: relative;
  &:before {
    content: '';
    position: absolute;
    bottom: 10%;
    right: 50%;
    width: 50px;
    height: 10px;
    background: #fff;
     @include small {
       right: 40%;
       background: $hover-color;
    }
  }
  @include medium {
        font-size: 70px;
    }
}
.contacts__title--descr {
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.contacts__descr {
  display: flex;
  flex-flow: column;
  width: 60%;
  height: inherit;
  position: relative;
  padding: 0 50px 60px 60px;
   @include medium {
        padding: 90px 20px 30px 30px;
    }
    @include small {
      padding: 0 10px 0 10px;
      margin: 0;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
}

.contacts__descr--title {
  margin: 0 0 60px 0;
  padding: 0;
  font-size: 22px;
  line-height: 26px;
  font-weight: 500;
  @include small {
     margin: 40px 0 40px 0;
    }
  
  > span {
    font-size: 60px;
    margin: 10px 15px;
    display: block;
    float: left;
    @include medium {
        font-size: 40px;
    }
    @include small {
        font-size: 30px;
    }
  }
  > p {
    margin: 0;
    padding: 0;
     @include medium {
        font-size: 18px;
        line-height: 20px;
    }
    @include small {
        font-size: 16px;
        line-height: 18px;
    }
  }
  
}
.contacts__descr--txt {
  margin-top: 20px;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0,0,0, .8);
  @include small {
        font-size: 12px;
        line-height: 12px;
        margin-top: 10px;
    }
}
.contacts__features--wrap {
  position: absolute;
  bottom: 0;
  right: 0;

  @include small {
    left: 0;
  }

}
.contacts__link-ctc {
  @include flexCenter;
  padding: 0;
  
  > a {
    font-size: 14px;
    padding-left: 60px;
    text-decoration: none;
    color: #fff;
    @include flexCenter;
    text-transform: uppercase;
    background: $hover-color;
    
    transition: color .3s ease-in-out;
    transition: background .3s ease-in-out;

    &:hover {
      color: $hover-color;
      background: $accent-color;
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
  }
}
.contacts-address {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: wrap;
  width: 100%;
  font-size: 0;
  @include medium {
        flex-flow: column nowrap;
    }
    @include small {
      align-items: center;
    }
}
.contacts-address__item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  font-size: 16px;
  line-height: 16px;
  color: rgba(0,0,0, .8);
  font-style: normal;
  @include small {
     width: 100%;
     justify-content: center;
    }

  > span {
    display: block;
    margin-right: 10px;
    color: $hover-color;
  }
  > div {
    margin-bottom: 20px;
    > p {
    padding: 0;
    margin: 0 0 10px 0;
    @include small {
      font-size: 14px;
    }
  }
  }
  @include medium {
        width: 100%;
    }
}
</style>
