let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function prevslide() {
  showSlides(slideIndex -= 1);
}
function nextslide() {
  showSlides(slideIndex += 1);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (j = 0; j < slides.length; j++) {
    slides[j].style.display = "none";
  }
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
  slideIndex++;
}