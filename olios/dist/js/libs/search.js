 // search product

 const db = [
     { title: 'Red Seat', url: '#', imgPath: 'http://www.rollonfriday.com/Portals/0/images/Red-Chair-High-Back-l.jpg' },
     { title: 'Dark Seat', url: '#', imgPath: 'https://dm4c9mjc2jvtf.cloudfront.net/product-media/1QCX/800/600/Vitra-DSW-Eames-Plastic-Side-Chair-Dark-Maple-Base-Mauve-Grey.jpg' },
     { title: 'Green Seat', url: '#', imgPath: 'https://ae01.alicdn.com/kf/HTB1try1SpXXXXXYaXXXq6xXFXXXr/2-Colors-Baby-Toilet-Trainer-Seat-Plastic-Toilet-Potties-Chair-Thickened-Safety-Infant-Assistant-Toilet-Training.jpg_640x640.jpg' },
     { title: 'Yellow Bed', url: '#', imgPath: 'https://cdn.homedit.com/wp-content/uploads/2014/10/yellow-leather-bed-design.jpg' },
 ];

 function Search() {
     const textField = document.querySelector('#search');
     const resetBtn = document.querySelector('#form-reset');
     const list = document.querySelector('.trade-list');
     const count = document.querySelector('.count');

     //поиск по базе
     const getData = request => {
         if (request.length === 0) {
             return [];
         }
         return db.filter(item => {
             return item.title.toLowerCase().indexOf(request.toLowerCase()) > -1
         })
     }


     const initLayout = data => {

         // удаление из списка предыдущих найденных продуктов
         while (list.firstChild) {
             list.removeChild(list.firstChild);
         }

         //вывод количества найденных продуктов
         let ln = data.length;
         count.textContent = ln;
         if (data.length === 0) {
             const span = document.createElement('span');
             span.textContent = 'No result found';
             list.appendChild(span);
             return;
         }

         //нахождение и отображение элемента + присвоение ему класса
         data.forEach(item => {
             const a = document.createElement('a');
             const imgPr = document.createElement('img');

             a.classList.add('trade-link');
             a.setAttribute('href', item.url);
             imgPr.setAttribute('src', item.imgPath);
             a.textContent = item.title;
             list.appendChild(a);
             a.appendChild(imgPr);
         });
     }

     //очистка поля поиска и найденый результатов
     resetBtn.addEventListener('click', () => {
         textField.value = '';
         resetBtn.classList.remove('search-form__reset--active');
     });

     //получение данных через ввод
     textField.addEventListener('keyup', ev => {
         resetBtn.classList.add('search-form__reset--active');
         let val = ev.target.value;
         let response = getData(val);
         if (val.length >= 3) {
             let preloader = document.querySelector('.preloader');
             preloader.classList.add('preloader--active');
             setTimeout(() => {
                 preloader.classList.remove('preloader--active');
                 initLayout(response)
             }, 500);
         }
     });
 }
 Search();