// Modal window

function modal() {
    let btnModal = document.querySelector('#js-modal-btn');
    let overlay = document.querySelector('.overlay');
    let modal = document.querySelector('.modal');
    let btnClose = document.querySelector('#js-modal-close');
    let btnOk = document.querySelector('#js-modal-ok');

    btnModal.addEventListener('click', () => {
        modal.classList.add('modal--show');
        overlay.classList.add('overlay--active');
        document.body.classList.add('body--fixed');
        overlay.addEventListener('click', closeModal);
    });

    function closeModal() {
        modal.classList.remove('modal--show');
        overlay.removeEventListener('click', closeModal);
        overlay.classList.remove('overlay--active')
        document.body.classList.remove('body--fixed');
    }
    btnClose.addEventListener('click', () => {
        modal.classList.remove('modal--show');
        setTimeout(() => overlay.classList.remove('overlay--active'), 250);
        overlay.removeEventListener('click', closeModal);
    });

    btnOk.addEventListener('click', () => {
        modal.classList.remove('modal--show');
        setTimeout(() => overlay.classList.remove('overlay--active'), 250);
        overlay.removeEventListener('click', closeModal);
    });
}
modal();