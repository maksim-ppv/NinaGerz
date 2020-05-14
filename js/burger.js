const btn = document.querySelector('.menu-button');
const menu = document.querySelector('.mobile_nav');
const burger = document.querySelector('.menu-button__line');
const navbarLink = document.querySelectorAll('.navbar__link');


const close = ()=>{
   menu.classList.toggle('menu_active');
   btn.classList.toggle('line_active');
}
navbarLink.forEach((item)=>{
   item.addEventListener('click', close)
});
btn.addEventListener('click', close);

