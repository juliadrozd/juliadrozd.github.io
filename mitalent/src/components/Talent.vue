<template>
 <!--talent-->
    <section class="talent">
        <!--search-wrap-->
    <div class="search-wrap">
        <div class="search">
            <form class="talent__search"
                @submit.prevent="onSearchSubmit">
            <input type="text" class="talent__search--field"
                v-model="search" placeholder="SEARCH PERSON" 
                :class="{ 'header__search-textfield--invalid': invalid }">
            <button class="talent__search--btn">
                <i class="material-icons">search</i>
            </button>
        </form>
        <span class="invalid" v-show="invalid === true">Oh, empty field</span>
        </div>
        
    </div><!--./search-wrap-->

        <!--talent__content-->
        <div class="talent__content"
                v-if="profiles.length > 0"
                v-bind:class="{'view-list': isShowList}" >
            <div v-show="noPerson" class="person-null">
                        Sorry, we don't know this person. Just found the simmilar...
            </div>
              
            <div class="talent-card-wrap"
                    v-for="(profile, key) in profiles" :key="key"
                    :class="{ 'talent-card-wrap--list': isShowList }">
                <app-cards :profilesData="profile"/>
            </div>
        </div> <!--./talent__content-->

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
import { mapGetters } from 'vuex';

export default {
   data () {
        return {
            search: '',
            invalid: false,
            category: '',
            noPerson: false,
        }
    },
    computed: {
        ...mapGetters([
            'btnValue',
            'isShowList'
        ]),
        
        profiles() {
            return this.$store.state.profiles.filter(profile => {
                if (this.btnValue) {
                    return profile.category.toLowerCase().indexOf(this.btnValue.toLowerCase()) > -1
                } else if (this.search) {
                    this.category !== this.btnValue;

                }
                return profile.name.toLowerCase().match(this.search.toLowerCase())
            });
            

        },
    },
    methods: {
        onSearchSubmit () {
            if (this.search.length === 0) {
                this.invalid = !this.invalid;
                this.noPerson = false;
                    setTimeout(() => {
                          this.invalid = false;
                    }, 3000);
            } 
            else if (this.search !== this.name) {
                this.noPerson = !this.noPerson;
            }
           
             this.$emit('profiles', this.search);
        },
        
    },
    watch: {
        search () {
            if (this.search.length >= 0 && this.invalid === true) {
                this.invalid = false;
            
            } 
            if (this.search.length >= 0 && this.noPerson === true) {
                this.noPerson = false;
            } 
            
        },
    },
    
    components: {
        appCards: Cards,
        appCategories: Categories,
        
  },
  created() {
      this.$store.dispatch('getProfiles');
  }
}
</script>
<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.talent {
    text-align: center;
    margin: 0 -35px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

.talent-wrap {
    @include flexBetween;
    width: 100%;
    margin: 0 30px;
    @include small {
        flex-flow: column nowrap;
        @include flexCenter;
    }
}
.search-wrap {
    height: 35px;
    width: 100%;
    margin-right: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
}
.search {
    text-align: left;
}
.talent__search {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover .talent__search--btn > i {
        color: $hover-color;
    }
    
    @include  small {
    width: 100%;
    justify-content: flex-end;
    margin-top: 0;
    }
}

.talent__search--field {
    border: none;
    outline: none;
    background: none;
    border-left: 3px solid $hover-color;
    padding: 10px 10px;
    &:focus ~ .talent__search--btn {
        color: $hover-color;
    }
}

.talent__search--btn {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    > i {
        transition: color .3s ease-in-out;
    }
}

.talent__content {
    font-family: 'Poppins', sans-serif;
    margin-top: 35px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    @include  small {
    margin-top: 10px;
    }
}
.view-list {
    width: 100%;
    flex-flow: column wrap;
}
.person-null {
    font-size: 24px;
    color: $accent-color;
    width: 100%;
    margin: 20px;
}
.talent-card-wrap--list {
    height: 380px;
    opacity: 0;
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
.invalid {
    height: 5px;
    font-size: 14px;
    color: $hover-color;
    width: 100%;
    display: block;
}

</style>

