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
