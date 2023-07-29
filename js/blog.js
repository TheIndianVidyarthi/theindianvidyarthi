function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    img = document.getElementById("img1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
      img.style.transform = "scale(1)";
			img.style.transition = "transform 0.25s ease";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
      img.style.transform = "scale(1.5)";
			img.style.transition = "transform 0.25s ease";
    }
  }
