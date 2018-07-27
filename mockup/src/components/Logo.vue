<template>
<!--Main logo-->
    <div class="main-logo">
        <a href="#" class="main-logo__link">
            <img class="main-logo__img" src="https://firebasestorage.googleapis.com/v0/b/mockup-646e9.appspot.com/o/logotype.png?alt=media&token=b6827175-b497-45c1-bb04-c5675a338425" alt="mockup">
        </a>
    </div>
<!--./Main logo-->
</template>

<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.main-logo__img {
    min-width: 227px;
    min-height: 34px;
     @include extraSmall {
        margin-bottom: 20px;
    }
}
</style>

