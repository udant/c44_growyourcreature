class maze{
constructor(){

}
display(){
    var player;
    var wall_1,wall_2,wall_3,wall_4,wall_5,wall_6,wall_7,wall_8,wall_9,wall_10;
    var prize;
    player = createSprite(200,365,10,10);
    wall_1 = createSprite(200,300,100,10);
    wall_2 = createSprite(300,250,10,100);
    wall_3 = createSprite(140,350,10,100);
    wall_4 = createSprite(140,350,10,100);
    wall_5 = createSprite(110,300,100,10);
    wall_6 = createSprite(200,200,400,10);
    wall_7 = createSprite(200,395,400,10);
    wall_8 = createSprite(200,5,400,10);
    wall_9 = createSprite(5,200,10,400);
    wall_10 = createSprite(395,200,10,400);
    prize = createSprite(50,365,5,5);
    if (keyIsDown(UP_ARROW)) {
        player.y = player.y-10;
      }else if (keyIsDown(DOWN_ARROW)) {
        player.y = player.y+10;
      }else if (keyIsDown(LEFT_ARROW)) {
        player.x = player.x-10;
      }else if (keyIsDown(RIGHT_ARROW)) {
        player.x = player.x+10;
      }
      if (isTouching(player,wall_1)) {
        player.y = player.y+19;
      }else if (isTouching(wall_2,player)) {
        player.y = player.y+19;
      }else if (isTouching(wall_3,player)) {
        player.x = player.x+19;
      }else if (isTouching(wall_4,player)) {
        player.y = player.y-19;
      }else if (isTouching(wall_5,player)) {
        player.y = player.y-19;
      }else if (isTouching(wall_6,player)) {
        player.y = player.y+19;
      }else if (isTouching(wall_7,player)) {
        player.y = player.y-19;
      }else if (isTouching(wall_8,player)) {
        player.y = player.y+19;
      }else if (isTouching(wall_9,player)) {
        player.x = player.x+19;
      }else if (isTouching(wall_10,player)) {
        player.x = player.x-19;
      }
      if (isTouching(prize,player)) {
        text("You won",100,250);
      }
      drawSprites();
}



}
/*var player,player_img;
var wall_1,wall_2,wall_3,wall_4,wall_5,wall_6,wall_7,wall_8,wall_9,wall_10;
var prize,prize_img; 

function preload() {
  player_img = loadImage("Steve exp4.png");
  prize_img = loadImage("prize1.png");
}

function setup(){
    canvas = createCanvas(400,400);
    player = createSprite(200,365,10,10);
    player.addImage("Steve exp4",player_img);
    wall_1 = createSprite(200,300,100,10);
    wall_2 = createSprite(300,250,10,100);
    wall_3 = createSprite(140,350,10,100);
    wall_4 = createSprite(140,350,10,100);
    wall_5 = createSprite(110,300,100,10);
    wall_6 = createSprite(200,200,400,10);
    wall_7 = createSprite(200,395,400,10);
    wall_8 = createSprite(200,5,400,10);
    wall_9 = createSprite(5,200,10,400);
    wall_10 = createSprite(395,200,10,400);
    prize = createSprite(50,365,5,5);
    prize.addImage("prize1",prize_img);
}
function draw(){
  background(0);
  text("Your name is Steve.A thief stole your diamond and kept it in a maze.",25,100);
  text("You entered there but found out that you cant come out.",25,125);
  text("Find your diamond.",25,150);
  if (keyIsDown(UP_ARROW)) {
    player.y = player.y-10;
  }else if (keyIsDown(DOWN_ARROW)) {
    player.y = player.y+10;
  }else if (keyIsDown(LEFT_ARROW)) {
    player.x = player.x-10;
  }else if (keyIsDown(RIGHT_ARROW)) {
    player.x = player.x+10;
  }
  if (isTouching(player,wall_1)) {
    player.y = player.y+19;
  }else if (isTouching(wall_2,player)) {
    player.y = player.y+19;
  }else if (isTouching(wall_3,player)) {
    player.x = player.x+19;
  }else if (isTouching(wall_4,player)) {
    player.y = player.y-19;
  }else if (isTouching(wall_5,player)) {
    player.y = player.y-19;
  }else if (isTouching(wall_6,player)) {
    player.y = player.y+19;
  }else if (isTouching(wall_7,player)) {
    player.y = player.y-19;
  }else if (isTouching(wall_8,player)) {
    player.y = player.y+19;
  }else if (isTouching(wall_9,player)) {
    player.x = player.x+19;
  }else if (isTouching(wall_10,player)) {
    player.x = player.x-19;
  }
  if (isTouching(prize,player)) {
    text("You won",100,250);
  }
  drawSprites();
}

*/