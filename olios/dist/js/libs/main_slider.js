// slider on home page
function sliderSection() {
    const tabsBtn = document.querySelector('.main-preview__controls');
    const activeTab = 'current-section';
    const activeBtn = 'current-dots';

    tabsBtn.addEventListener('click', ev => {
        if (ev.target.tagName === 'A') {
            const anchor = ev.target.getAttribute('href');
            switchTab(anchor);
            switchActiveBtn(ev.target);
        }
    });

    function switchTab(selector) {

        let tab = document.querySelector(selector);
        let parent = tab.closest('.main-preview');

        parent.querySelector(`.${activeTab}`)
            .classList.remove(activeTab);
        setTimeout(() => tab.classList.add(activeTab), 350);

    }

    function switchActiveBtn(selector) {
        let li = selector;
        let parent = li.closest('.main-preview__controls');

        parent.querySelector(`.${activeBtn}`)
            .classList.remove(activeBtn);
        li.classList.add(activeBtn);
    }
}
sliderSection();