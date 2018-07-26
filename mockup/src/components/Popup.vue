<template>
    <transition name="slide-down">
        <form action="#"
                v-show="isShowPopup">
            <button @click="closePopup">
                <i class="material-icons">clear</i>
            </button>
            
            <h2>Subscribe to our Newsletters</h2>
            <p>Please, enter your email address to receive all news from our site.</p>

            <input type="text" placeholder="example@gmail.com" name="mail" required>

            <i>* Don't worry you'll not be spammed</i>

            <input type="submit" value="Subscribe">
        </form>
    </transition>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data () {
    return {
    }
  },
  computed: {
        ...mapGetters([
            'isShowPopup',
            'isShowOverlay',
        ]),

    },
     methods: {
        closePopup() {
            if (this.isShowPopup === true) {
                document.body.classList.remove('body--fixed');
                this.$store.dispatch('isPopup', false);
                setTimeout(() => {
                    this.$store.dispatch('isOverlay', false);
                }, 250)
            }
        },  
    },
    
}
</script>
<style lang="scss" scoped>
@import './mixins/_mixins.scss';
form {
    width: 465px;
    background: #ffffff;
    box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.4);
    text-align: center;
    transition: transform .3s ease-in-out;
    position: absolute;
    bottom: 50%;
    left: 35%;
    padding: 30px;
    z-index: 999999;

    > button {
        position: absolute;
        top: 10px;
        right: 10px;
        margin: 0;
        padding: 0;
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
    }
    > h2 {
        margin: 30px 0;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: -1px;
        text-transform: uppercase;
        color: #4999af;

    }
    > p {
        font-size: 16px;
        font-weight: 400;
        color: $light-main;
        text-align: left;
        padding-right: 40px;
    }
    > input[type=text]{
        width: 100%;
        border-radius: 5px;
        background-color:  #f5f5f5;
        border: 1px solid #ccc;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
        color: $light-main;
        font-size: 22px;
        padding: 15px;
        margin: 10px 0;
    }
    > i {
        color: $light-main;
        font-size: 14px;
        display: block;
        text-align: left;
    }
     @include extraSmall {
         width: 100%;
        left: 0;
    }
}

input[type=submit] {
    font-family: Arial;
    color:  #f3eeea;
    font-size: 18px;
    font-weight: 400;
    border: none;
    background: #4999af;
    text-transform: uppercase;
    margin: 10px 0;
    padding: 20px 40px;
    border-radius: 5px;
    cursor: pointer;
    transition: opacity .3s ease-in-out;
    &:hover {
        opacity: 0.8;
    }
}

.slide-down-enter, .slide-down-leave-active {
    transform: translateX(-150%);
   
  }
</style>

