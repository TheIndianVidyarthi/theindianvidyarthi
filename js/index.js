// for the about page
window.addEventListener("scroll", function() {
    var overlay = document.getElementById("About-content");
    var videoBackground = document.getElementById("About-bg");
    var scrollPosition = window.scrollY;
  
    var maxOpacity = 1;
    var minOpacity = 0;
    var maxScroll = videoBackground.offsetHeight - window.innerHeight;
    var opacity = Math.min(scrollPosition / maxScroll, maxOpacity);
    overlay.style.opacity = 1 - opacity;
  
    // Set a minimum opacity for the overlay
    if (opacity < minOpacity) {
      overlay.style.opacity = minOpacity;
    }
});
