<template>
    <!--footer-->
    <footer class="main-footer">
        <div class="container">
            <div class="footer__features">
               <app-logo />

                <div class="footer__singup">
                    <a href="#" class="footer__singup--field">
                        <span class="footer__singup--descr">Sing up our newsletter</span>
                        <i class="fa fa-envelope-o"></i>
                    </a>
                </div>
            </div>

            <address class="footer__address">
                <div class="footer__address--copy">
                &copy 2018 MI Talent. Designed by Tranmautritan. Developed by Julia_Drozd
                </div>
                <div class="footer__address--social">
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
                    </ul>
                </div>
            </address>
        </div>
    </footer>
    <!--./footer-->
</template>
<script>

import Logo from './Logo'

export default {
  data: () => ({
}),
  components: {
    appLogo: Logo,
  }
}
</script>
<style lang="scss" scoped>
@import './mixins/_mixins.scss';
.main-footer {
    width: 100%;
    margin: 50px 0 0 0;
    padding: 0;
    @include small {
        margin: 70px 0 0 0;
    }
}

.footer__features {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
    border-bottom: 2px solid rgba(0, 0, 0, .2);
    @include small {
        flex-flow: column wrap;
        padding-bottom: 10px;
    }
}
.footer__singup {
    @include small {
        margin: 30px 0;
    }
}
.footer__singup--field {
    border: none;
    outline: none;
    background: none;
    border-left: 3px solid rgb(181, 211, 211);
    padding: 10px 0;
    font-size: 14px;
    color: rgb(26, 26, 29);
    text-decoration: none;
    transition: color .3s ease-in-out;
    >i {
        padding-left: 20px;
        font-size: 18px;
        font-weight: 700;
    }
    &:hover {
        color: rgb(181, 211, 211);
    }
    
}

.footer__singup--descr {
    padding-left: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.footer__address {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: normal;
    @include small {
        flex-flow: column wrap;
    }
}

.footer__address--social {
    >ul {
        display: flex;
        flex-flow: row;
        height: inherit;
        list-style: none;
        >li {
            margin-right: 20px;
            
            > a {
                text-decoration: none;
                color: rgb(26, 26, 29);
                transition: color .3s ease-in-out;
                &:hover {
                    color: $hover-color;
                }
            }
        }
    }
}
</style>


