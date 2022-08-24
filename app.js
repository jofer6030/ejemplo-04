const feature = document.getElementById("feature");
const company = document.getElementById("company");
const closeMenu = document.getElementById("close_menu");
const menuHamburger = document.querySelector(".menu_hamburger");
const menuMobile= document.querySelector(".menu_mobile");

feature.addEventListener("click", (e) => {
  feature.classList.toggle("active")
})

company.addEventListener("click", () => {
  console.log("Company")
})

menuHamburger.addEventListener("click", () => {
  menuMobile.classList.add('show')
})

closeMenu.addEventListener("click", () => {
  menuMobile.classList.remove('show')
})