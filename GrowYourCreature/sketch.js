var bg;
var START = 0;
var PLAY = 1;
var gameState = START;
var loginform,creatures,choosecreatureform,adminform;
var creaturecountdb;
var creaturelistdb=[];
var alluserinfo = [];
var database;
var usercount;
function preload() {
  bg = loadImage("images/loadingbg.jpg");  
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-10);
  database = firebase.database();
  creatures = new Creatures();
  loginform = new LoginForm();
  adminform = new AdminForm();
}

function draw() {
  background(bg); 
//background("black");
   /* loginform = new chooseCreatureForm();
    loginform.display();*/
    loginform.display();  
    
    
  drawSprites();
}