// for the about page
function scroll(){
  var overlay = document.getElementById("About-content");
  var videoBackground = document.getElementById("About-bg");
  var scrollPosition = window.scrollY;

  let scrollTop = scrollPosition || document.documentElement.scrollTop;
  overlay.style.opacity = scrollTop / 0.1; 
  console.log(scrollTop)

}
window.addEventListener("scroll", scroll);


const icon = document.getElementById("hamburger")
const menu = document.getElementById("menu")
const nav = document.getElementById("nav")
console.log(icon)
icon.addEventListener("click",()=>{
  menu.classList.toggle('show')
  nav.classList.toggle('show')
  icon.classList.toggle("change");

})