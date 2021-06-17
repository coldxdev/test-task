const menuBurger = document.querySelector(".menu__burger");
const menu = document.querySelector(".menu");

menuBurger.addEventListener("click", () => {
  menuBurger.classList.toggle("active");
  menu.classList.toggle("active");
});

const footerBtn = document.querySelector(".footer__btn");

const backToTop = () => {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 0);
  }
};

footerBtn.addEventListener("click", backToTop);
