const nav = document.querySelector(".nav")
console.log(nav)
window.onresize = function() {
  clientWidth = document.documentElement.clientWidth
  nav.style.width = clientWidth + "px"
  console.log(clientWidth)
};
var clientWidth = document.documentElement.clientWidth

nav.style.width = clientWidth + "px"