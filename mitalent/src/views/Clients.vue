<template>
  <div class="wrapper">
        <app-slider-clients />
        <section class="categories">
          <!--talent-->
            <section class="talent">
              
              <!--talent-categories-->
              <div class="talent-caterogies">
                <app-categories />
                <div class="talent-categories__view--btn">
                  <button class="views-module">
                    <i class="material-icons">view_module</i>
                  </button>

                  <button class="views-list">
                    <i class="material-icons">view_list</i>
                  </button>
                </div>

              </div><!--./talent-categories-->

              <div class="talent__content">
              <!--talent__content-->
                <div class="talent-card-wrap" v-for="(profile, key) in renderProfile" :key="key">
                    <app-cards :profilesData="profile"/>
                </div>
              </div>

          </section>
    <!--./talent-->
        </section>
        <!--news-->
        <section class="news container">
        <h1 class="section__title">Latest news</h1>

        <app-articles />

    </section>
    <!--./news-->
  </div>
</template>
<script>

import Social from '../components/Social'
import Articles from '../components/Articles'
import SliderClients from '../components/SliderClients'
import Cards from '../components/Cards'
import Categories from '../components/Categories'
import firebase from 'firebase'

export default {
  name: 'clients',
  props: {
        myQuery: {
            type: String,
            default: '',
        }
    },
  data () {
    return {
        ref: 'https://mitalent-b73e5.firebaseio.com/profile.json',
        profiles: [],

      }
},
 methods: {
        getProfiles: function() {
            this.$http.get(this.ref)
                .then((result) => {
                    this.profiles = result.data;
                }).catch((err) => {
                //error
            });
    },
      },
      computed: {
       renderProfile () {
        return this.profiles.filter(profile => { 
        return profile.name.indexOf(this.myQuery) > -1
    })
    },
  },

  components: {
      appSocial: Social,
     appCards: Cards,
    appCategories: Categories,
      appArticles: Articles,
      appSliderClients: SliderClients,

  },
  created: function() {
      this.getProfiles()
  }
}
</script>

<style lang="scss" scoped>
@import '../components/mixins/_mixins.scss';
.talent {
    text-align: center;
    margin: 50px -35px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
.talent-caterogies{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @include small {
    flex-flow: column nowrap;
  }
}
.talent-categories__view--btn {
  > button {
    border: none;
    outline: none;
    background: none;
    margin: 3px;
    cursor: pointer;
    > i {
      color: rgba(0, 0, 0, .5);
      transition: color .3s ease-in-out;
      &:hover {
        color: $accent-color;
      }
    }
  }
}

.talent__content {
    font-family: 'Poppins', sans-serif;
    margin-top: 35px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

.news {
    margin-top: 50px;
    text-align: center;
}
</style>
