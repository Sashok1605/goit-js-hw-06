/**Напиши скрипт, который реагирует на изменение 
значения input#font-size-control (событие input) 
и изменяет инлайн-стиль span#text обновляя свойство font-size. 
В результате при перетаскивании 
ползунка будет меняться размер текста.*/

const sizeControl = document.querySelector('#font-size-control');
const changeText = document.querySelector('#text');
sizeControl.addEventListener('input', e => {
    changeText.style.fontSize = e.currentTarget.value + 'px';
})


