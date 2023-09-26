const images = ["summer1","summer2","summer3","summer5","summer6"]
const imgElem = document.getElementById("content-img");
console.log(imgElem);
var currentIndex1 = 0;
currentIndex1 = (currentIndex + 1) % loadingLines.length;

function updateImg() {
  imgElem.src = "image/" + images[currentIndex1] + ".png"
  console.log("image/" + images[currentIndex1] + ".jpg");
  currentIndex1 = (currentIndex + 1) % 5;
}

setInterval(updateImg, 3000); 


