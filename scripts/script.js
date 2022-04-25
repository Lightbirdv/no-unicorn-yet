const primaryNav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', toggleNavigation)

for (idx = 0; idx < 4; idx++) {
  var NavA = document.getElementsByClassName('nav-item')[idx];
  NavA.addEventListener('click', toggleNavigation);
}

function toggleNavigation() {
  const visibility = primaryNav.getAttribute('data-visible')
  if (visibility === "false") {
    primaryNav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
  } else {
    primaryNav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is <= 499px
    768: {
        slidesPerView: "2",
        spaceBetweenSlides: 0
    },
    1024: {
      slidesPerView: "3"
    }
  }
});

var swiper = new Swiper(".pricingSwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

var swiper = new Swiper(".qtProcessSlider", {
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: "auto"
    }  
  }
});

var swiper = new Swiper(".caseStudySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is <= 499px
    768: {
        slidesPerView: 2,
        spaceBetweenSlides: 0
    }
  }
});
 