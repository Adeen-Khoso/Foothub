const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const heroSection = document.getElementById('hero-section');
const textContainer = document.getElementById('text-container');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
});

window.addEventListener('scroll', function() {
    let scrolledValue = 70;
    let scrolled = window.scrollY > scrolledValue;
  
    if (scrolled) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  