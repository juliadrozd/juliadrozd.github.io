<template>
  <nav id="navigation" class="nav">
      <ul class="nav__list">
          <li class="nav__item">
              <a href="#" class="nav__link">
                  <button  @click="show=!show" class="nav__link--btn">
                      <i class="fa fa-bars"></i>
                  </button>
              </a>
          </li>
          <li class="nav__item">
              <a href="#" class="nav__link">Clients</a>
          </li>
          <li class="nav__item">
              <a href="#" class="nav__link">News</a>
          </li>
      </ul>
    
      <div class="main-logo">
          <a href="#" class="main-logo__link">
              <img class="main-logo__img" src="../assets/logo.png" alt="Mitalent">
          </a>
      </div>

      <div class="nav__search">
          <input type="text" class="nav__search--field">
          <button class="nav__search--btn">
              <i class="fa fa-search"></i>
          </button>
      </div>

      <div v-show="show" transition="slide" class="nav__aside">
          <ul class="nav__aside--list">
              <li class="nav__aside--item">
                  <a class="nav__aside--link" href="#">Home</a>
              </li>
              <li class="nav__aside--item">
                  <a class="nav__aside--link" href="#">About</a>
              </li>
              <li class="nav__aside--item">
                  <a class="nav__aside--link" href="#">Contact</a>
              </li>
              <li class="nav__aside--item">
                  <a class="nav__aside--link" href="#">Blog</a>
              </li>
          </ul>
      </div>
  </nav>
</template>
<script>
export default {
  data: {
        show: false
  }
}
</script>

<style scoped>
.nav {
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
}
.nav__list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.nav__item {
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    
}
.nav__item:not(:last-child) {
    margin-right: 50px;
}
.nav__link {
    color: #1a1a1d;
    text-decoration: none;
    transition: color .2s ease-in-out;
}
.nav__link:hover {
    color: rgba(119,221,211,1);
}
.nav__link--btn {
    border: none;
    outline: none;
    background: none;
    font-size: 14px;
    cursor: pointer;
    transition: color .2s ease-in-out;
}
.nav__link--btn:hover {
     color: rgba(119,221,211,1);
}

.main-logo__img {
    min-width: 227px;
    min-height: 34px;
    
}
.nav__search {
    display: flex;
    justify-content: center;
    align-items: center;
 
}
.nav__search--field {
    border: none;
    outline: none;
    background: none;
}
.nav__search--btn {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
}
.nav__aside {
    position: absolute;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: center;
    width: 250px;
    height: 100vh;
    background: #fff;
    z-index: 999;
    top: 60px;
    box-shadow: 5px 0 5px -5px rgba(0,0,0,0.23);
    padding: 40px 20px;
}
.nav__aside--list {
    list-style: none;
    margin: 0;
    padding: 0;
}
.nav__aside--item:not(:last-child) {
    margin-bottom: 20px;
}

.nav__aside--link{
    text-decoration: none;
    color: #1a1a1d;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    font-size: 14px;
    padding: 20px 60px;
    transition: color .2s ease-in-out;
}
.nav__aside--link:hover {
    color: rgba(119,221,211,1);
}

.slide-transition {
    transition: all .3s cubic-bezier(.65, .05, .36, 1);
}

.slide-enter, .slide-leave {
    left: -100%;
}
</style>

