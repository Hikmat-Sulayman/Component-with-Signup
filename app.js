const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const togglePassword = document.querySelector('.toggle-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value.trim();
  const lName = lastName.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  validateField(firstName, fName === '', "First Name cannot be empty");
  validateField(lastName, lName === '', "Last Name cannot be empty");
  validateField(email, !validateEmail(emailVal) || emailVal === '', "Looks like this is not an email");
  validateField(password, passwordVal === '', "Password cannot be empty");
});

function validateField(field, condition, message) {
  const errorMessage = field.nextElementSibling;
  const errorIcon = errorMessage.nextElementSibling;
  if (condition) {
    field.classList.add('error');
    errorMessage.textContent = message;
    errorMessage.style.display = 'inline';
    errorIcon.style.display = 'inline';
  } else {
    field.classList.remove('error');
    errorMessage.style.display = 'none';
    errorIcon.style.display = 'none';
  }
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

togglePassword.addEventListener('click', () => {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  togglePassword.textContent = type === 'password' ? '👁' : '👁️‍🗨️';
});
