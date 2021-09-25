function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputColor = document.querySelector('.change-color');
console.log(inputColor);
const spanText = document.querySelector('.color');
inputColor.addEventListener('click', () => {
  const color = getRandomHexColor();
  spanText.textContent = color;
  document.body.style.background = color;
});



