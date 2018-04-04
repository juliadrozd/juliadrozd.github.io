import nunjucks from 'nunjucks';

function addProducts() {
    const container = document.querySelector('.products__grid-wrap');
    const loadMore = document.querySelector('.products__load-more');

    const PRODUCTS_DB = [
        { cardTitle: 'Read Seat 100', cardUrl: 'google.com', cardImgPath: '#', cardDescr: 'sadasdas', cardPrice: '$35' },
        { cardTitle: 'Blue Seat 200', cardUrl: 'google.com', cardImgPath: '#', cardDescr: 'sadasdas', cardPrice: '$35' },
        { cardTitle: 'green Seat 300', cardUrl: 'google.com', cardImgPath: '#', cardDescr: 'sadasdas', cardPrice: '$35' },
        { cardTitle: 'rebecca Seat 1', cardUrl: 'google.com', cardImgPath: '#', cardDescr: 'sadasdas', cardPrice: '$35' },
        { cardTitle: 'rebecca Seat 2', cardUrl: 'google.com', cardImgPath: '#', cardDescr: 'sadasdas', cardPrice: '$35' },
        { cardTitle: 'rebecca Seat 3', cardUrl: 'google.com', cardImgPath: '#', cardDescr: 'sadasdas', cardPrice: '$35' },
        { cardTitle: 'rebecca Seat 4', cardUrl: 'google.com', cardImgPath: '#', cardDescr: 'sadasdas', cardPrice: '$35' },
    ];
    const dbLength = PRODUCTS_DB.length;
    let download = 0;

    loadMore.addEventListener('click', ev => {

        let currentProductNumber = 0;
        const maxDownloadPerClick = 2;

        for (let i = download; i < PRODUCTS_DB.length; i++) {

            let content = '';
            if (currentProductNumber < maxDownloadPerClick && download < dbLength) {
                let card = PRODUCTS_DB[i];
                content = nunjucks.render('../templates/card.njk', card);
                currentProductNumber++;
                download++;
            }
            container.innerHTML += content;

        }
    });

}
if (document.querySelector('.products__grid-wrap') !== null) addProducts();