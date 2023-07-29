// for the about page
function scroll(){
  var overlay = document.getElementById("About-content");
  var videoBackground = document.getElementById("About-bg");
  var scrollPosition = window.scrollY;

  let scrollTop = scrollPosition || document.documentElement.scrollTop;
  overlay.style.opacity = scrollTop / 150; 
  console.log(scrollTop)

}
window.addEventListener("scroll", scroll);
