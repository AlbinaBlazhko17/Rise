import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

document.addEventListener('DOMContentLoaded', () => {
  let mySwiper = new Swiper('.projects__carousel', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 50,
    on: {
      init: function () {
        setTimeout(updateArrowColors, 0);
      },
      slideChange: function () {
        updateArrowColors();
      },
    },
    wrapperClass: 'projects__carousel__wrapper',
    slideClass: 'projects__carousel-slide',

    // Navigation arrows
    navigation: {
      nextEl: '.projects__arrows-next',
      prevEl: '.projects__arrows-prev',
    },
  });

  var feedbackSwiper = new Swiper('.feedbacks__carousel', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 50,
    centeredSlides: true,

    wrapperClass: 'feedbacks__carousel__wrapper',
    slideClass: 'feedbacks__carousel-slide',

    pagination: {
      el: '.feedbacks__carousel-pagination',
      clickable: true,
    },

    on: {
      init: function () {
        const activeSlide = document.querySelector(
          '.feedbacks__carousel-slide.swiper-slide-active'
        );
        activeSlide.style.boxShadow =
          '0px 25px 32px 0px rgba(67, 67, 67, 0.14)';
      },
      slideChange: function () {
        const slides = document.querySelectorAll('.feedbacks__carousel-slide');
        slides.forEach((slide) => {
          slide.style.boxShadow = 'none';
        });
        const activeSlide = slides[this.activeIndex];
        activeSlide.style.boxShadow =
          '0px 25px 32px 0px rgba(67, 67, 67, 0.14)';
      },
    },
  });

  function updateArrowColors() {
    const prev = [...document.querySelectorAll('.projects__arrows-prev path')];
    const next = [...document.querySelectorAll('.projects__arrows-next path')];

    let isFirstSlide = mySwiper.isBeginning;

    let isLastSlide = mySwiper.isEnd;

    if (isFirstSlide) {
      for (let el of prev) {
        el.setAttribute('stroke', '#828282');
      }
    } else {
      for (let el of prev) {
        el.setAttribute('stroke', '#636770');
      }
    }

    if (isLastSlide) {
      for (let el of next) {
        el.setAttribute('stroke', '#828282');
      }
    } else {
      for (let el of next) {
        el.setAttribute('stroke', '#636770');
      }
    }
  }
  const signIn = document.querySelector('#signIn');
  const signUp = document.querySelector('#signUp');

  signIn.addEventListener('click', (e) => {
    e.preventDefault();
    MicroModal.show('modal-1');
  });

  signUp.addEventListener('click', (e) => {
    e.preventDefault();
    MicroModal.show('modal-2');
  });
});
