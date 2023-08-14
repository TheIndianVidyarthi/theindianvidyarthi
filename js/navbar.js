const icon = document.getElementById("hamburger")
const menu = document.getElementById("menu")
const nav = document.getElementById("nav")
const body = document.querySelector("body")

function menuToggle() {
  menu.classList.toggle('show')
  nav.classList.toggle('show')
  icon.classList.toggle("change");
  body.classList.toggle("show");
}

icon.addEventListener("click", menuToggle)

window.onresize = function() {
  clientWidth = document.documentElement.clientWidth
  nav.style.width = clientWidth + "px"
};
var clientWidth = document.documentElement.clientWidth

nav.style.width = clientWidth + "px"

// nav.style.display = "none"
// window.addEventListener("scroll", ()=>{
//   nav.style.display = "flex"
// });