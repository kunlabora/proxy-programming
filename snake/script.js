const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const blockSize = 40;
let pressedKey = "";

function drawBlock(xPosition, yPosition) {
  context.beginPath();
  context.rect(xPosition * blockSize, yPosition * blockSize, blockSize, blockSize);
  context.strokeStyle = "#FF0000";
  context.stroke();
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function keyDown(key) {
  pressedKey = key.key;
}

function tick() {
  //TODO
  drawBlock(1,1);
}


window.addEventListener('keydown', keyDown);

setInterval(() => {
  clearCanvas();
  tick();
}, 100);