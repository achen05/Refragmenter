var element = document.getElementById('sketchContainer');
var width = element.offsetWidth;

var canvasWidth = width;
var canvasHeight = canvasWidth;

var widthIndex;
var heightIndex;

var drawCount = 0;

var randomDestination = Math.random();

let input;
let img;

function preload() {

}

function setup() {
  let c = createCanvas(canvasWidth, canvasHeight);
  c.parent('sketchContainer');
  inputButton = createFileInput(handleFile);
  inputButton.parent("sketchButtonContainer");
  inputButton.elt.style.display = 'none';
}

function draw() {
  if (img) {
    document.getElementById('sketchButtonContainer').style.display = 'none';
    inputButton.remove();
    for (widthIndex = 0; widthIndex < canvasWidth; widthIndex ++) {
      for (heightIndex = 0; heightIndex < canvasHeight; heightIndex += 4) {
        image(img, widthIndex, heightIndex, 4, 4, Math.random() * canvasWidth * 10, Math.random() * canvasHeight * 10, 8, 8);
      }
    }
    drawCount++;
    document.getElementById('loadingText').innerHTML = drawCount + "%";

    if (drawCount == 100) {
      noLoop();
      document.getElementById('saveImageButton').style.display = 'inline-block';
    }
  }

}

function saveFile() {
  saveCanvas('Refragmentor', 'png');
}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}

function windowResized() {
  c.center();
  inputButton.position(c.position(), 800);
}
