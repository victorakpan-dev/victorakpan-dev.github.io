const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden', 'transition', 'ease-in-out', 'duration-500')
  } else {
    menu.classList.add('hidden', 'transition', 'ease-in-out', 'duration-500')
  }
});
