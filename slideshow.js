function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function displayNextImage() {

//  x = (x === images.length - 1) ? 0 : x + 1;
x = getRandomInt(images.length)
  document.getElementById("img").src = images[x];
}

function startTimer() {
  setInterval(displayNextImage, 100);
}

var images = [],
  x = -1;
images[0] = "images/1.png";
images[1] = "images/2.png";
images[2] = "images/3.png";
images[3] = "images/4.png";
images[4] = "images/5.png";
