<template>
  <a href="#" class="main-slider__btn" @click="onOpenPerson">
        <span class="main-slider__btn--descr">View profile</span>
        <span class="main-slider__btn--icon">
            <i class="material-icons">change_history</i>
        </span>
    </a>
</template>
<script>
export default {
  props: ['personsData'],
  methods: {
      onOpenPerson() {
       this.$router.push(`/profile/${this.personsData.id}`);
    },
  }
}
</script>
<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.main-slider__btn {
    display: flex;
    height: 80px;
    width: 300px;
    border: none;
    outline: none;
    background: none;
    padding: 0;
    font-size: 20px;
    text-transform: uppercase;
    text-decoration: none;
    z-index: 999;
    cursor: pointer;
    
    &:hover .main-slider__btn--descr {
        background: rgb(52, 55, 59);
        color: rgba(119,221,211,1);
    }
    &:hover .main-slider__btn--icon {
        color: rgba(119,221,211,1);
    }

    @include medium {
        height: 50px;
        width: 250px;
        font-size: 16px;
    }
    @include small {
        width: 50%;
        height: 60px;
        font-size: 14px;
    }
}
.main-slider__btn--descr {
    width: 70%;
    height: inherit;
    background: rgba(119,221,211,1);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color .3s ease-in-out;
    transition: background .3s ease-in-out;
}
.main-slider__btn--icon {
    color: rgba(45, 47, 51, 0.9);
    background: #fff;
    width: 30%;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color .3s ease-in-out;
    > i {
        transform: rotate(90deg);
    }
}
</style>
