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
        const evCategory = getInputVal('category');

        // Create wrapp elements - items
        const container = document.querySelector('.event__container');
        let eventItem = document.createElement('figure');
        eventItem.className = 'event__item';
        container.appendChild(eventItem);

        // Create title element
        let title = document.createElement('a');
        title.setAttribute('href', ' ');
        title.href = evTitle;
        title.className = "event__item--title";
        title.innerHTML = evTitle;
        eventItem.appendChild(title);

        // Create start date element
        let startDate = document.createElement('span');
        startDate.className = "event__item--start";
        startDate.innerHTML = dateStart;
        eventItem.appendChild(startDate);

        // Create end date element
        let endDate = document.createElement('span');
        endDate.className = "event__item--end";
        endDate.innerHTML = dateEnd;
        eventItem.appendChild(endDate);

        // Create place element
        let place = document.createElement('span');
        place.className = "event__item--place";
        place.innerHTML = evPlace;
        eventItem.appendChild(place);

        // Create category element
        let category = document.createElement('span');
        category.className = "event__item--category";
        category.innerHTML = evCategory;
        eventItem.appendChild(category);

        // Create image element
        function getImage() {
            let input = document.getElementById('image').files;
            let fileTypes = [
                'image/jpeg',
                'image/jpg',
                'image/png'
            ]
            for (var i = 0; i < input.length; i++) {
                if (validFileType(input[i])) {
                    var image = document.createElement('img');
                    image.classList.add('event__item--image');
                    image.src = window.URL.createObjectURL(input[i]);
                    eventItem.appendChild(image);
                }
            }

            function validFileType(file) {
                for (var i = 0; i < fileTypes.length; i++) {
                    if (file.type === fileTypes[i]) {
                        return true;
                    }
                }

                return false;
            }
        }
        getImage();
        viewEvent();
    });

}
// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

function viewEvent() {
    let eventContainer = document.getElementById('container');
    let allEvent = eventContainer.getElementsByTagName('figure').length;

    if (allEvent > 2) {
        eventContainer.lastElementChild.classList.add('hide');
    }

}
// Load more events
function loadMore() {
    load.addEventListener('click', () => {
        let eventContainer = document.getElementById('container');
        let hideItem = eventContainer.getElementsByClassName('hide');

        for (let i = 0; i < hideItem.length; i++) {
            let current = hideItem[i];
            current.classList.remove('hide');
        }
    });

}