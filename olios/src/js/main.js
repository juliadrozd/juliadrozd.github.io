window.addEventListener('DOMContentLoaded', init);

import mainMenu from './components/main_menu.js';
import sliderSection from './components/main_slider.js';
import Search from './components/search.js';
import addProducts from './components/products.js';



function init() {

    const mainmenu = mainMenu('#navigation');

    const mainslider = sliderSection('#main-slider');

    const searchProduct = Search('#search-product');
    const products = addProducts('#add-products');

}