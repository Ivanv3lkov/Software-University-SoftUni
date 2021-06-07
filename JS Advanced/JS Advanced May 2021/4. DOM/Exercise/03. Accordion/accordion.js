function toggle() {
   let button = document.querySelectorAll('.button')[0];
   let text = document.querySelector('#extra');

   button.textContent == 'More' ?  button.textContent = 'Less' : button.textContent = 'More';
   button.textContent == 'More' ?  text.style.display = 'none' : text.style.display = 'block';  
}