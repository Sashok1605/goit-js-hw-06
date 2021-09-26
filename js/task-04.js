const clickCounter = {
    buttonIncNode: document.querySelector("[data-action='increment']"),
    buttonDecNode: document.querySelector("[data-action='decrement']"),
    spanValue: document.getElementById('value'),
    };        
      
let counterValue = 0;
      
const increment = () => {
    counterValue += 1;
    clickCounter.spanValue.textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
    clickCounter.spanValue.textContent = counterValue;
  };
  
  clickCounter.buttonIncNode.addEventListener('click', increment);
  clickCounter.buttonDecNode.addEventListener('click', decrement);      