function showValue() {
    let formContainer = document.getElementById('user__info-wrap');
    let inputItem = formContainer.getElementsByTagName('input');
    let textareaItem = document.getElementById('textCommentApp');
    let textareaValue = textareaItem.value;

    for (let i = 0; inputItem[i]; i++) {
        let inputValue = inputItem[i].value;
        inputItem[i].addEventListener('click', () => {
            inputItem[i].value = ' ';
            inputItem[i].addEventListener('focusout', () => {
                if (inputItem[i].value.length === 1) {
                    inputItem[i].value = inputValue;
                }
            });
        });
    }

    textareaItem.addEventListener('click', () => {
        textareaItem.value = ' ';
    });
    textareaItem.addEventListener('focusout', () => {
        if (textareaItem.value.length === 1) {
            textareaItem.value = textareaValue;
        }
    });
}
if (document.getElementById('form-application') !== null) showValue();