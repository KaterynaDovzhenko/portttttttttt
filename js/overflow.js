const openBtn = document.querySelector('.js-open-menu');
const closeBtn = document.querySelector('.js-close-menu');
const overlay = document.querySelector('.js-menu-container');
const wrapper = document.querySelector('.main');

// Store the offset so we can restore it on close.
let scrollTop = 0;

openBtn.addEventListener('click', () => {
  scrollTop = window.scrollY;
  wrapper.classList.add('is-fixed');
  overlay.classList.add('overlay--is-open');
  // Scroll the wrapper, rather than setting an offset
  // via `top` or `transform`.
  wrapper.scroll(0, scrollTop);
});

closeBtn.addEventListener('click', () => {
  wrapper.classList.remove('is-fixed');
  overlay.classList.remove('overlay--is-open');
  window.scrollTo(0, scrollTop);
});

