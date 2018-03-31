// menu
function mainMenu() {
    let btnMenu = document.querySelector('#menu-btn');
    let btnMenuClose = document.querySelector('#menu-close-btn');
    let showMenu = document.querySelector('.main-nav');
    let overlay = document.querySelector('.overlay');

    btnMenu.addEventListener('click', () => {
        showMenu.classList.add('main-nav--active');
        setTimeout(() => { overlay.classList.add('overlay--active') }, 250);
        overlay.addEventListener('click', closeMenu);
        btnMenuClose.addEventListener('click', closeMenu);
    });

    function closeMenu() {
        showMenu.classList.remove('main-nav--active');
        setTimeout(() => { overlay.classList.remove('overlay--active') }, 250);
        overlay.removeEventListener('click', closeMenu);
    }
}
mainMenu();