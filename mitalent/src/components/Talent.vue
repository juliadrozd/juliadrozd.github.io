<template>
 <!--talent-->
    <section class="talent">
        
        <app-categories />
         <div class="talent__content">
              <!--talent__content-->
                <div class="talent-card-wrap" v-for="(profile, key) in renderProfile" :key="key">
                    <app-cards :profilesData="profile"/>
                </div>
         </div>

        <a href="/clients" class="talent__explore--btn"> Explore more</a>
    </section>
    <!--./talent-->
</template>
<script>
import Cards from './Cards'
import Categories from './Categories'
import firebase from 'firebase'

export default {
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
    appCards: Cards,
    appCategories: Categories,
  },
  created: function() {
      this.getProfiles()
  }
}
</script>
<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.talent {
    text-align: center;
    margin-top: 50px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
.talent__content {
    font-family: 'Poppins', sans-serif;
    margin-top: 35px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
.talent-card-wrap {
    width: 25%;
}
.talent__explore--btn {
    @include flexCenter;
    text-decoration: none;
    width: 220px;
    height: 60px;
    border: none;
    outline: none;
    background: rgb(181, 211, 211);
    text-transform: uppercase;
    color: #fff;
    font-size: 14px;
    border-radius: 50px;
    margin-top: 30px;
    cursor: pointer;
    transition: background .3s ease-in-out;
    &:hover {
        background: rgba(45, 47, 51, 0.9);
    }
}
</style>

