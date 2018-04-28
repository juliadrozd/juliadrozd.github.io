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

.header__search {
    display: flex;
    justify-content: center;
    align-items: center;
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
}
</style>


