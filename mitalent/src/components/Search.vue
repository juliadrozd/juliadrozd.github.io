<template>
  <!--Header search-->
    <div class="header__search">
        <input type="text" class="header__search--field">
        <button class="header__search--btn">
            <i class="material-icons">search</i>
        </button>
    </div>
<!--./Header search-->
</template>
<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.header__search {
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

.header__search--field {
    border: none;
    outline: none;
    background: none;
}

.header__search--btn {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    transition: color .3s ease-in-out;
    &:hover {
        color: rgba(255, 255, 255, .3);
    }
}
</style>


