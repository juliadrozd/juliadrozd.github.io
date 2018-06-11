document.addEventListener('DOMContentLoaded', init);

function init() {
    const add = document.getElementById('add');
    const load = document.getElementById('load');
    const addForm = document.getElementById('addForm');

    addNew();
    loadMore();
    submitForm();
}

// Show form
function addNew() {
    const btnClose = document.getElementById('close--event');

    add.addEventListener('click', () => {
        addForm.classList.add('show--form');
    });

    btnClose.addEventListener('click', (e) => {
        e.preventDefault();
        addForm.classList.remove('show--form');
    });
}

// Listen form value
function submitForm() {
    const pushNew = document.getElementById('pushEvent');

    pushNew.addEventListener('click', (e) => {
        e.preventDefault();

        // Get values
        const evTitle = getInputVal('title');
        const dateStart = getInputVal('date--start');
        const dateEnd = getInputVal('date--end');
        const evPlace = getInputVal('place');
        const evImage = getInputVal('image');
        const evCategory = getInputVal('category');

        // Create wrapp elements - items
        const container = document.querySelector('.event__container');
        let eventItem = document.createElement('figure');
        eventItem.className = 'event__item';
        container.appendChild(eventItem);

        // Push values into item
        let title = document.createElement('h2');
        title.className = "event__item--title";
        title.innerHTML = evTitle;
        eventItem.appendChild(title);

    });
}




// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Load more events by 2
function loadMore() {
    load.addEventListener('click', () => {
        console.log('load');
    });

}