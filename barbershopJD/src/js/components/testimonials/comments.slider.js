// Slider
// should be updated
// nextBtn doesnt work correctly
// prevBtn doesnt implement
function Slider() {
    let endCount = 0; // колличество страниц
    const sliderContainer = document.querySelector('.testimonials__slider-track');
    const btnNext = document.querySelector('#js-next--btn');
    let currentCount = 1;
    let position = 0;



    //обработчик клика на стрелки

    btnNext.addEventListener('click', ev => {
        endCount = sliderContainer.children.length;
        let sliderItemFirst = sliderContainer.lastElementChild;

        if (currentCount < endCount) {
            currentCount++;
            let cloneItem = sliderItemFirst.cloneNode(true); // склонировали
            cloneItem = sliderContainer.appendChild(cloneItem); //вставили клон

            sliderContainer.removeChild(sliderItemFirst); //удалили склонированы
            sliderItemFirst = sliderContainer.lastElementChild;



            if (currentCount === endCount) {

                let sliderItemFirst = sliderContainer.firstElementChild;


                let cloneItem = sliderItemFirst.cloneNode(true); // склонировали
                cloneItem = sliderContainer.appendChild(cloneItem); //вставили клон

                sliderContainer.style.transform = `translateX(0)`;
                cloneItem.style.transform = `translateX(0)`;
                position += 0;

                sliderContainer.removeChild(sliderItemFirst); //удалили склонированы
                sliderItemFirst = sliderContainer.firstElementChild;



            }
        }

    });

}



//     if (currentCount > 1) {
//         currentCount--;
//         position -= slideWidth;
//     } else if (currentCount == 1) {
//         currentCount = endCount;
//         position = slideWidth * (endCount - 1);
//     }





Slider();