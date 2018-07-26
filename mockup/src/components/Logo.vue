<template>
<!--Main logo-->
    <div class="main-logo">
        <a href="#" class="main-logo__link">
            <img class="main-logo__img" src="./src/assets/logotype.png" alt="mockup">
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

