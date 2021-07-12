var element = document.getElementById('sketchContainer');
var width = element.offsetWidth;

var canvasWidth = width;
var canvasHeight = canvasWidth;

var widthIndex;
var heightIndex;

var drawCount = 0;

var resolution = 4;
var sourceResolution = resolution / 2;


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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function draw() {
  if (img) {
    document.getElementById('sketchButtonContainer').style.display = 'none';
    inputButton.remove();
    for (widthIndex = 0; widthIndex < canvasWidth; widthIndex+=resolution) {
      for (heightIndex = 0; heightIndex < canvasHeight; heightIndex+=resolution) {
        image(img, widthIndex, heightIndex, resolution, resolution, getRandomInt(img.width), getRandomInt(img.height), sourceResolution, sourceResolution);
      }
    }
    drawCount++;
    document.getElementById('loadingText').innerHTML = drawCount * 2 + "%";

    if (drawCount == 50) {
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
