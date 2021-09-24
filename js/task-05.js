const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const word = 'Anonymous';

nameInput.addEventListener('input', e => {
    nameOutput.textContent = e.currentTarget.value ? e.currentTarget.value : word;
})