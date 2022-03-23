var navTrigger = document.getElementsByClassName('nav-trigger')[0],
    body = document.getElementsByTagName('body')[0];

navTrigger.addEventListener('click', toggleNavigation);

function toggleNavigation(event) {
  event.preventDefault();
  body.classList.toggle('nav-open');
}

for (idx = 0; idx < 7; idx++) {
  var NavA = document.getElementsByClassName('nav-item')[idx];
  NavA.addEventListener('click', toggleNavigation);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
  anchor.addEventListener('click', function (e) { 
    e.preventDefault(); document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' }); 
  }); 
});