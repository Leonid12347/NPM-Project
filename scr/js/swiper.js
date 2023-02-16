import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
    
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination //не нужны
  //pagination: {
  //  el: '.swiper-pagination',
  //},

  // Navigation arrows //Стрелкаи не нужны влево вправо
  //navigation: {
  //  nextEl: '.swiper-button-next',
  //  prevEl: '.swiper-button-prev',
  //},

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

export default swiper;