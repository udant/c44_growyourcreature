const Engine = Matter.Engine;

var START = 0;
var PLAY = 1;
var gameState = START;
var form;
function setup() {
  createCanvas(displayWidth-20,displayHeight-10);
}

function draw() {
  background(255,255,255); 
  ///console.log("keycode"+keyCode);
  if (keyCode === 83) {
    form = new Form();
    form.display();  
  }
  text("Press 'S' to start",displayWidth/2,displayHeight/2); 
  drawSprites();
}