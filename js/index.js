// for the about page
function scroll() {
  var overlay = document.getElementById("About-content");
  var videoBackground = document.getElementById("About-bg");
  var scrollPosition = window.scrollY;

  let opacityValue = scrollPosition / 75; // Adjust the divisor to control the animation speed
  overlay.style.transition = "opacity 0.1s"; // Set the transition duration to 0.1 seconds (adjust as needed)
  overlay.style.opacity = opacityValue;
  console.log(scrollPosition);
}

window.addEventListener("scroll", scroll);
