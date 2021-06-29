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
images[0] = "images/Chanel Berkeley.jpeg";
images[1] = "images/Dani Davis.jpeg";
images[2] = "images/Gill Davis.PNG";
images[3] = "images/Kate Centerville, MA.jpeg";
images[4] = "images/Katie Davis.jpeg";
images[5] = "images/Kylie Belmont.png";
images[6] = "images/Megan Redwood City .jpeg";
