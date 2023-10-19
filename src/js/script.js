import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

document.addEventListener('DOMContentLoaded', () => {
  let mySwiper = new Swiper('.projects__carousel', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    wrapperClass: 'projects__carousel__wrapper',
    slideClass: 'projects__carousel-slide',
    navigation: {
      nextEl: '.projects__arrows-next',
      prevEl: '.projects__arrows-prev',
    },

    on: {
      init: function () {
        setTimeout(updateArrowColors, 0);
      },
      slideChange: function () {
        updateArrowColors();
      },
    },

    breakpoints: {
      950: {
        slidesPerView: 1,
        centeredSlides: true,
      },
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
  const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu__item'),
    hamburger = document.querySelector('.hamburger'),
    buttons = document.querySelector('.header__auth');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    menu.classList.toggle('header__menu-active');
    buttons.classList.toggle('header__auth-active');
  });

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger-active');
      menu.classList.toggle('header__menu-active');
      buttons.classList.toggle('header__auth-active');
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      window.scroll({
        top: target.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  });
});

window.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  if (window.scrollY > document.querySelector('.hero').clientHeight) {
    document.querySelector('.header').classList.add('header-active');
  } else {
    document.querySelector('.header').classList.remove('header-active');
  }
});
