const formInput = document.querySelector(".login-form");

formInput.addEventListener('submit', inputSubmit);

function inputSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password }
  } = e.currentTarget;
console.log(event.currentTarget);

  if (email.value === "" || password.value === "") {
    
    return alert('Please fill in all the fields!');
  } 

  const users = {
      email: email.value,
      password: password.value,
  }
  console.log(users);
  e.currentTarget.reset();
}