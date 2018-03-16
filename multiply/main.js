window.addEventListener('DOMContentLoaded', init);

function init() {

    offCanvas();
    modal();
    //tableMultiply();

}

// Menu
function offCanvas() {
    let nav = document.querySelector('#nav');
    let btn = document.querySelector('#js-nav-btn');
    let overlay = document.querySelector('.overlay');

    btn.addEventListener('click', () => {
        overlay.classList.add('overlay--active');
        setTimeout(() => nav.classList.add('nav--active'), 150);
        overlay.addEventListener('click', closeNav);
    });

    function closeNav() {
        nav.classList.remove('nav--active');
        setTimeout(() => overlay.classList.remove('overlay--active'), 250);
        overlay.removeEventListener('click', closeNav);
    }

}

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

// Interactive tabs

function tabs() {
    const tabsBtn = document.querySelector('.tabs__list');
    const activeTab = 'tabs__content-item--active';
    const activeBtn = 'tabs__item--active';

    tabsBtn.addEventListener('click', ev => {
        if (ev.target.tagName === 'A') {
            const anchor = ev.target.getAttribute('href');
            switchTab(anchor);
            switchActiveBtn(ev.target);
        }
    });

    function switchTab(selector) {

        let tab = document.querySelector(selector);
        let parent = tab.closest('.tabs__content');

        parent.querySelector(`.${activeTab}`)

        .classList.remove(activeTab);

        setTimeout(() => tab.classList.add(activeTab), 350);

    }

    function switchActiveBtn(selector) {

        let li = selector.parentElement;
        let parent = li.closest('.tabs__list');

        parent.querySelector(`.${activeBtn}`)
            .classList.remove(activeBtn);

        li.classList.add(activeBtn);
    }
}
tabs();
// Hover line in target

function targetHover() {

    const target = document.querySelector('.target');
    const links = document.querySelectorAll('.tabs__link');


    function mouseenterFunc() {
        if (!this.parentNode.classList.contains('active')) {
            for (let i = 0; i < links.length; i++) {
                if (links[i].parentNode.classList.contains('active')) {
                    links[i].parentNode.classList.remove('active');
                }
                links[i].style.opacity = '.25';
            }

            this.parentNode.classList.add('active');
            this.style.opacity = '1';

            const width = this.getBoundingClientRect().width;
            const height = this.getBoundingClientRect().height;
            const left = this.getBoundingClientRect().left + window.pageXOffset;
            const top = this.getBoundingClientRect().top + window.pageYOffset;

            target.style.width = `${width}px`;
            target.style.height = `${height}px`;
            target.style.left = `${left}px`;
            target.style.top = `${top}px`;
            target.style.borderColor = 'rgb(255, 102, 1)';
            target.style.transform = 'none';
        }
    }

    for (let i = 0; i < links.length; i++) {

        links[i].addEventListener('click', mouseenterFunc);
    }

}
targetHover();



// Взамодействие с пользователем

/*let isReady = confirm('Ти готовий вивчити табличку множення?');

if (isReady == true) {
    tableMultiply();

} else if (isReady == false) {
    alert('Це легко ;) ');
   
}*/

// Отображение Пифагоровой таблицы умножения
/*function tableMultiply(i, j) {
    let table = document.createElement('table');
    table.style.fontFamily = 'Fira Code';
    table.style.textAlign = 'left';
    table.style.marginTop = '20px';
    table.style.marginBottom = '0';
    table.style.marginLeft = 'auto';
    table.style.marginRight = 'auto';

    let row = document.createElement('tr');
    row.style.backgroundColor = 'lightgreen';

    for (let i = 2; i <= 9; i++) {
        let cell = document.createElement('td');

        for (let j = 1; j <= 10; j++) {
            let cellInner = document.createElement('tr');
            cellInner.appendChild(document.createTextNode(i + ' x ' + j + ' = ' + (i * j)));

            cell.appendChild(cellInner);
            cell.style.padding = '6px';
            cell.style.width = '150px';

            row.appendChild(cell);
        }

        table.appendChild(row);


        document.body.appendChild(table);
    }
}*/