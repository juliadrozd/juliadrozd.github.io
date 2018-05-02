<template>
  <div>
      <router-link to="/">
          Home
      </router-link>
  </div>
</template>
<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.router-link-active {
    color: $main-color;
    text-decoration: none;
    transition: color .3s ease-in-out;

    &:hover {
        color: $hover-color;
    }
}
</style>
