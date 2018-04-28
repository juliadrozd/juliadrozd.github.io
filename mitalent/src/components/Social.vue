<template>
  <address class="address-aside">
        <ul class="address-aside__list">
            <li class="address-aside__item">
                <a href="#" class="address-aside__link">
                    <i class="fa fa-facebook-official"></i>
                </a>
            </li>
            <li class="address-aside__item">
                <a href="#" class="address-aside__link">
                    <i class="fa fa-instagram"></i>
                </a>
            </li>
            <li class="address-aside__item">
                <a href="#" class="address-aside__link">
                    <i class="fa fa-youtube-play"></i>
                </a>
            </li>
            <li class="address-aside__item">
                <a href="#" class="address-aside__link">
                    <i class="fa fa-twitter"></i>
                </a>
            </li> 

            <div class="address-aside__counter">02</div>
        </ul>
    </address>
</template>
<style lang="scss" scoped>
.address-aside {
    display: flex;
    flex-flow: column wrap;
    margin: 0;
    height: inherit;
    font-style: normal;
    font-weight: 700;
}

.address-aside__list {
    height: 400px;
    list-style: none;
    margin: 0 0 40px 0;
    padding: 0;
    flex-flow: column wrap;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.address-aside__link {
    color: rgb(26, 26, 29);
    text-decoration: none;
    transition: color .2s ease-in-out;
    font-size: 16px;
    transition: color .2s ease-in-out;
}

.address-aside__link:hover {
    color: rgb(181, 211, 211);
}

.address-aside__counter {
    margin-top: 0;
    transform: rotate(-90deg);
}
</style>
