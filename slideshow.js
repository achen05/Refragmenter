function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function displayNextImage() {
              x = (x === images.length - 1) ? 0 : x + 1;
              document.getElementById("img").src = images[x];
          }

function startTimer() {
  setInterval(displayNextImage, 40);
}

var images = [],
  x = -1;
images[0] = "images/01.png";
images[1] = "images/02.png";
images[2] = "images/03.png";
images[3] = "images/04.png";
images[4] = "images/05.png";
images[5] = "images/06.png";
images[6] = "images/07.png";
images[7] = "images/08.png";
images[8] = "images/09.png";
images[9] = "images/10.png";
