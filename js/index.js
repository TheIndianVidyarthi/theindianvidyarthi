// for the about page
function scroll() {
  const htmlElement = document.documentElement
  var overlay = document.getElementById("About-content");
  var videoBackground = document.getElementById("About-bg");
  var scrollPosition = window.scrollY;

  // var percentageOfScreenScrolled = htmlElement.scrollTop/htmlElement.clientHeight;
  // console.log(percentageOfScreenScrolled)
  
  
  let opacityValue = scrollPosition / 75 - 9; // Adjust the divisor to control the animation speed and adjust the subtracrted value to control when the opacity changes
  overlay.style.transition = "opacity 0.1s"; // Set the transition duration to 0.1 seconds (adjust as needed)
  overlay.style.opacity = opacityValue;


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