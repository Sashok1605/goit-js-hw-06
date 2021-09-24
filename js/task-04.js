const buttonDecNode = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value');

buttonDecNode.addEventListener('click' , even => {
    counterValue.textContent = parseInt(counterValue.textContent) -1;
    });

const buttonIncNode = document.querySelector('button[data-action="increment"]');
buttonIncNode.addEventListener('click' , even => {
    counterValue.textContent = parseInt(counterValue.textContent) +1;
    });
