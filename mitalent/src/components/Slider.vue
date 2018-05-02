<template id="slider-section">
    <section id="main-slider" class="main-slider">
        <div class="slider-wrap" 
        v-show="person.id !== 1 ? isShowPerson : !isShowPerson" 
        v-for="(person, key) in renderPersons" :key="key">
            <div class="slider-social-wrap">
                <address class="address-aside">
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
                    </ul>
                    <div class="address-aside__counter">{{ "0"+ person.id }}</div>
                </address>
            
                <app-to-profile :personsData="person"/>
            </div>

            <div class="figure--wrap" id="js-figures">
                <app-person :personsData="person"/> 
            </div>
            
        </div>
        <ul class="main-content__counter--list">
            <li class="main-content__counter--item" 
            v-for="(person, key) in renderPersons" :key="key"
             :class="{active : person.id === 1}"
             @click="mainSlider($event)"
            >{{ "0" + person.id }}</li>
        </ul>

    </section>
  
</template>
<script>
import Social from './Social'
import Person from './Person'
import firebase from 'firebase'
import toPtofile from './toProfile'

export default {
     props: {
        myQuery: {
            type: String,
            default: '',
        }
    },
    data () {
        return {
        ref: 'https://mitalent-b73e5.firebaseio.com/persons.json',
        persons: [],
        isShowPerson: false,
        isCounterActive: 'active',

      }
    },
   methods: {
    getPersons: function() {
       this.$http.get(this.ref)
       .then((result) => {
            this.persons = result.data;
       }).catch((err) => {
           //error
       });
    },
    
     mainSlider: function(e) {
        let counter = document.getElementsByClassName('main-content__counter--item');
        for (let i = 0; counter[i]; i++ ) {
           counter[i].classList.remove('active');
        }
         let currentId = e.target;
            currentId.classList.add('active');
           
        
    }
    
    },
   
  computed: {
       renderPersons () {
        return this.persons.filter(person => { 
        return person.name.indexOf(this.myQuery) > -1
    })
    },
  },
  components: {
    appSocial: Social,
    appPerson: Person,
    appToProfile: toPtofile,
    
  },
  created: function() {
      this.getPersons()
  }
}
</script>

<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.main-slider {
    width: 100%;
    overflow: hidden;
    margin: 0;
    position: relative;
    display: flex;
    flex-flow: column nowrap; 
    
}
.slider-wrap {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    height: inherit;
} 
.address-aside {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 0 40px 0;
    font-style: normal;
    font-weight: 700;
    height: 400px;
}
.address-aside__counter {
    margin-top: 0;
    transform: rotate(-90deg);
}

.figure--wrap {
    position: relative;
    width: 100%;
}


.main-content__counter--list {
    margin: 0;
    padding: 40px 40px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 240px;
    height: 250px;
    background: #fff;
    list-style-type: none;
    font-weight: 700;
    font-size: 10px;
    position: absolute;
    right: 0;
    bottom: 0;
}
.main-content__counter--item {
    color: rgba(0,0,0,.5);
    transition: color .2s ease-in-out;
    cursor: pointer;
    position: relative;
    transition: color .3s linear;
}
.active {
    color: #000;
}
.active:after,
.active:before {
    position: absolute;
    content: '';
    width: 0;
    height: 2px;
    top: 50%;
    background: $accent-color;
    transition: background 3s linear;
}
.active:after {
    left: 60px;
}
.active:before {
     right: 60px;
}
.active:after,
.active:before {
    width: 20px;
}
.main-content__counter--item:hover {
    color: #000;
}

</style>
