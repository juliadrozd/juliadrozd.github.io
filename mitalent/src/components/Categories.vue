<template>
  <ul class="talent-nav__list">
            <li class="talent-nav__item">
                <a href="#" class="talent-nav__link">Actor</a>
            </li>
            <li class="talent-nav__item">
                <a href="#" class="talent-nav__link">Musician</a>
            </li>
            <li class="talent-nav__item">
                <a href="#" class="talent-nav__link">Comedian</a>
            </li>
            <li class="talent-nav__item">
                <a href="#" class="talent-nav__link">Model</a>
            </li>
    </ul>
</template>
<style lang="scss" scoped>
.talent-nav__list {
    display: flex;
    width: 100%;
    list-style: none;
    justify-content: center;
    padding: 0;
}

.talent-nav__item:not(:last-child) {
    margin-right: 20px;
}

.talent-nav__link {
    padding: 15px 40px;
    text-decoration: none;
    color: rgba(0, 0, 0, .5);
    text-transform: uppercase;
    font-weight: 800;
    line-height: 18px;
    position: relative;
    transition: color .2s ease-in-out;
    &:hover {
        color: rgb(26, 26, 29);
    }
    &:before,
    &:after {
        content: '';
        height: 3px;
        width: 0;
        background: rgb(26, 26, 29);
        position: absolute;
        bottom: 0;
        transition: width .3s linear;
    }
    &:before {
        right: 50%;
    }
    &:after {
        left: 50%;
    }
    &:hover:before,
    &:hover:after {
        width: 50%;
    }
    &:active:before,
    &:active:after {
        background: rgb(26, 26, 29);
    }
}

</style>
