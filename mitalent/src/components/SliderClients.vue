<template>
    <section id="clients-slider" class="main-slider"
            v-if="persons.length > 0">
        <!--slider-wrap-->
        <div class="slider-wrap" 
        v-show="person.id === activeId" 
        v-for="(person, key) in persons" :key="key">

        <!--social-->
                    <address class="address-aside">
                    <!--address-aside__list-->
                    <ul class="address-aside__list">
                        <li class="address-aside__item">
                            <a :href="person.fb" class="address-aside__link" target="_blank">
                                <i class="fa fa-facebook-official"></i>
                            </a>
                        </li>
                        <li class="address-aside__item">
                            <a :href="person.insta" class="address-aside__link" target="_blank">
                                <i class="fa fa-instagram"></i>
                            </a>
                        </li>
                        <li class="address-aside__item">
                            <a :href="person.youtube" class="address-aside__link" target="_blank">
                                <i class="fa fa-youtube-play"></i>
                            </a>
                        </li>
                        <li class="address-aside__item">
                            <a :href="person.tw" class="address-aside__link" target="_blank">
                                <i class="fa fa-twitter"></i>
                            </a>
                        </li> 
                    </ul><!--./address-aside__list-->

                    <!--address-aside__counter-->
                    <div class="address-aside__counter">{{ "0"+ person.id }}</div>
                     <!--./address-aside__counter-->

                </address> 
            <!--./social-->

            <!--section-title-->
            <div class="section-title">
                <span class="section-title__title">Our talent</span>
                <span class="section-title__descr">Leading industry names.</span>
                <a href="/about" class="section-title__link">About us</a>
            </div><!--./section-title-->

            <!--person-->
            <div class="figure--wrap" id="js-figures">
                <app-clients-person :personsData="person"/>
                <!--main-slider__txt-btn-wrap-->
                <div class="main-slider__txt-btn-wrap">
                    <button @click="prevItem(person.id)" class="main-slider__prev">
                        <i class="material-icons">keyboard_arrow_up</i>
                    </button>
                    <button @click="nextItem(person.id)" class="main-slider__next">
                        <i class="material-icons">keyboard_arrow_down</i>
                    </button>
                </div> <!--./main-slider__txt-btn-wrap-->   
            </div><!--./person-->
            
            

        </div><!--./slider-wrap-->
        
    </section>
</template>
<script>
import Social from './Social'
import ClientsPerson from './ClientsPerson'
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
        persons: [],
        isCounterActive: 'active',
        activeId: 1,

      }
    },
   methods: {
       getPersons() {
        const self = this;
        firebase.database().ref('persons').once('value', function(snapshot){
            snapshot.forEach(function(childSnapshot){
                let childData = childSnapshot.val();
                self.persons.push(childData);
            });
        });      
    }, 
    mainSlider(id, e) {
         this.activeId = id;
        },
    nextItem(e) {
            if(this.activeId < this.persons.length) {
                this.activeId = this.activeId + 1;
            } else {
                return this.activeId;
            }
        },
    prevItem(e) {
            if (this.activeId !== 1){
                this.activeId = this.activeId - 1;
            } else {
                return this.activeId;
            }
        }
    },
  components: {
    appClientsPerson: ClientsPerson,
    
  },
  created() {
      this.getPersons()
  }
}
</script>

<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.main-slider {
    width: 100%;
    margin: 0;
    display: flex;
    flex-flow: column nowrap; 
     &:before {
        content: '';
        width: 770px;
        height: 900px;
        position: absolute;
        top: -300px;
        left: -30px;
        background: rgba(119,221,211,.5);
        z-index: -1;
            @include responsive(1980px) {
                width: 900px;
                height: 1200px;
            }
            @include responsive(1365px) {
                width: 750px;
                height: 1000px;
            }
            @include small {
                width: 450px;
                height: 700px;
            }
    }
}
.slider-wrap {
    display: flex;
    justify-content: center;
    width: 100%;
    @include small {
        flex-flow: column wrap;
    }
} 
.address-aside {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0;
    font-style: normal;
    font-weight: 700;
    height: 400px;
    width: 100px;
    @include small {
        display: none;
    }
    
}

.address-aside__counter {
    margin-top: 0;
    transform: rotate(-90deg);
}

.figure--wrap {
    display: block;
    position: relative;
   @include responsive(1980px) {
        height: 950;
    }
}
.main-slider__txt-btn-wrap {
    @include flexCenter;
    flex-flow: column;
    width: 20%;
    height: 150px;
    background: #fff;
    position: absolute;
    bottom: 0;
    right: 0;
    > button {
        border: none;
        outline: none;
        background: none;
        @include flexCenter;
        cursor: pointer;
        padding: 20px;
        color: rgba(0, 0, 0, .5);
        transition: color .3s ease-in-out;
        &:hover {
            color: $accent-color;
        }
    }
}
.section-title {
    height: inherit;
    width: 100%;
    background: #fff;
    padding: 60px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column wrap;
}
.section-title__title {
    font-size: 80px;
    text-transform: capitalize;
    margin-bottom: 20px;
     @include responsive(1980px) {
        font-size: 120px;
    }
     @include responsive(1365px) {
        font-size: 80px;
    }
}
.section-title__descr {
    text-transform: uppercase;
    margin-bottom: 20px;
    position: relative;
    &:before {
        content: '';
        width: 100px;
        position: absolute;
        height: 5px;
        background:$hover-color;
        top: 50%;
        right: -250px;

    }
}
.section-title__link {
    padding: 20px 60px;
    background: $hover-color;
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 3px;
    transition: color .3s ease-in-out;
    transition: background .3s ease-in-out;
    &:hover {
        color: $hover-color;
        background: $accent-color;
    }
    @include small {
        padding: 20px 40px;
    }
}
.aside-show {
    @include small {
        display: none;
    }
}
</style>
