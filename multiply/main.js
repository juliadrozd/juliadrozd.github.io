// Взамодействие с пользователем

let isReady = confirm('Ти готовий вивчити табличку множення?');

if (isReady == true) {
    tableMultiply();

} else if (isReady == false) {
    alert('Це легко ;) ');
    tableMultiply();
}


// Отображение Пифагоровой таблицы умножения
function tableMultiply(i, j) {
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
    }

    document.body.appendChild(table);
}