const form = document.querySelector('.cta__form');
const emailInput = document.querySelector('.cta__input');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = emailInput.value.trim();

  if (isValidEmail(email)) {
    alert('Спасибо! Мы свяжемся с вами.');
    form.reset();
  } else {
    alert('Введите корректный email!');
  }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===== Слайдер отзывов =====
const slides = document.querySelectorAll('.reviews__slide');
const dots = document.querySelectorAll('.reviews__dot');
let activeIndex = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('reviews__slide--active'));
  dots.forEach(dot => dot.classList.remove('reviews__dot--active'));

  slides[index].classList.add('reviews__slide--active');
  dots[index].classList.add('reviews__dot--active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    activeIndex = index;
    showSlide(activeIndex);
  });
});

// Авто-переключение
setInterval(() => {
  activeIndex = (activeIndex + 1) % slides.length;
  showSlide(activeIndex);
}, 5000);

// ===== Табы =====
const tabButtons = document.querySelectorAll('.tabs__button');
const tabContents = document.querySelectorAll('.tabs__content');

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('tabs__button--active'));
    tabContents.forEach(content => content.classList.remove('tabs__content--active'));

    button.classList.add('tabs__button--active');
    tabContents[index].classList.add('tabs__content--active');
  });
});