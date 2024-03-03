const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const heroSection = document.getElementById('hero-section');
const textContainer = document.getElementById('text-container');
const links = document.querySelectorAll('.links');

let width = screen.width;

links.forEach((link)=>{
  link.addEventListener('click',menuFunc)
})

menuBtn.addEventListener('click', menuFunc)

function menuFunc() {
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
};

window.addEventListener('scroll', function() {
  if(width > 700){ 
    let scrolledValue = 70;
    let scrolled = window.scrollY > scrolledValue;
  
    if (scrolled) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
});
  
