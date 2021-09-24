const textNode = document.querySelector('#validation-input');
const styleChoice = parseInt(document.querySelector('#validation-input').dataset.length);

textNode.addEventListener('blur', outValid);

function outValid () {
    if (textNode.value.length === styleChoice){
        textNode.classList.add('valid');
        textNode.classList.remove('invalid');
    } else {
        textNode.classList.remove('valid');
        textNode.classList.add('invalid');
    }
}

















