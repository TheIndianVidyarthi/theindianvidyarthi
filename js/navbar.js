const icon = document.getElementById("hamburger")
const menu = document.getElementById("menu")
const nav = document.getElementById("nav")
const body = document.querySelector("body")
console.log(body)
console.log(icon)
icon.addEventListener("click",()=>{
  menu.classList.toggle('show')
  nav.classList.toggle('show')
  icon.classList.toggle("change");
  body.classList.toggle("show");
})

window.onresize = function() {
  clientWidth = document.documentElement.clientWidth
  nav.style.width = clientWidth + "px"
};
var clientWidth = document.documentElement.clientWidth

nav.style.width = clientWidth + "px"