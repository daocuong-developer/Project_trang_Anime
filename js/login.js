const input = document.querySelector('.input-box input');
const label = document.querySelector('.input-box label');

input.addEventListener('focus', () => {
  label.classList.add('filled');
});

input.addEventListener('blur', () => {
  if (input.value === '') {
    label.classList.remove('filled');
  }
});