<template>
 <!--talent-->
    <section class="talent">
        
        <div class="talent-wrap">
            <app-categories />
            
            <div class="talent__search">
                <input type="text" v-model="search" placeholder="SEARCH PERSON" class="talent__search--field">
                <button class="talent__search--btn">
                    <i class="material-icons">search</i>
                </button>
            </div>
        </div>

         <div class="talent__content"
                v-if="profiles.length > 0">
              <!--talent__content-->
                <div class="talent-card-wrap"
                    v-for="(profile, key) in profiles" :key="key">
                    <app-cards :profilesData="profile"/>
                </div>
         </div>

        <div class="talent__explore--wrap">
            <a href="/clients" class="talent__explore--btn"> Explore more</a>
        </div>
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
        profiles: [],
        search: ''

      }
    },
      methods: {
        getProfiles() {
        const self = this;
        firebase.database().ref('profile').once('value', function(snapshot){
            snapshot.forEach(function(childSnapshot){
                let childData = childSnapshot.val();
                self.profiles.push(childData);
                });
            });      
        },
    },
    filteredProfile () {
        return this.profiles.filter(profile => {
            return profile.name.toLowerCase().match(this.search.toLowerCase())
        });
    },
  components: {
    appCards: Cards,
    appCategories: Categories,
  },
  created() {
      this.getProfiles()
  }
}
</script>
<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.talent {
    text-align: center;
    margin: 50px -35px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
.talent-wrap {
    @include flexBetween;
    width: 100%;
    margin: 0 30px;
}
.talent__search {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover .header__search--field {
        border-bottom: 1px solid rgba(255, 255, 255, .3);
    }
    @include  small {
    width: 100%;
    justify-content: flex-end;
    margin-top: 20px;
    }
}

.talent__search--field {
    border: none;
    outline: none;
    background: none;
    border-left: 3px solid $hover-color;
    padding: 10px 10px;
}

.talent__search--btn {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    transition: color .3s ease-in-out;
    &:hover {
        color: $hover-color;
    }
}

.talent__content {
    font-family: 'Poppins', sans-serif;
    margin-top: 35px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
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
.talent__explore--wrap {
    @include flexCenter;
    width: 100%;
    margin: 40px 0;
}

</style>

