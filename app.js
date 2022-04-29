const toggle = document.querySelector(".toggle");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector('.mobile-menu')
let isOpen = false;

if(!isOpen){
  mobileMenu.style.transform = 'translateX(100%)'
}
toggle.addEventListener("click", function (e) {
  if (!isOpen) {
    mobileMenu.style.transform='translateX(0%)'
    toggle.classList.add("open");
    hamburger.style.transform = 'rotate(360deg)'
    hamburger.style.filter = "invert(1)"
    isOpen = true;
  } else {
    mobileMenu.style.transform='translateX(100%)'
    hamburger.style.transform = 'rotate(180deg)'
    hamburger.style.filter = "invert(0)"
    toggle.classList.remove("open");
    isOpen = false;
  }
});
 