var loginbg,islandbg;
var START = 0;
var PLAY = 1;
var gameState = START;
var loginform,creatures,choosecreatureform,adminform,infoForm;
var creaturecountdb;
var showisland = false;
var creaturelistdb=[];
var alluserinfo = [];
var database;
var usercount;
var animal;
var egg,egg_img,egg1,egg1_img;
var meat,fish,plants,meat_img,fish_img,plants_img;
var snowIsland,riverIsland,forestIsland,snowIsland_img,nest,riverIsland_img,forestIsland_img,nest_img;
var cave,cave_img,Woolly_Mammoth,Woolly_Mammoth_img;
function preload() {
  loginbg = loadImage("images/loadingbg.jpg");  
  islandbg = loadImage("images/sky.jpg");
  snowIsland_img = loadImage("images/snowIsland.png");
  riverIsland_img = loadImage("images/riverIsland.png");
  forestIsland_img = loadImage("images/forestIsland.png");
  nest_img = loadImage("images/nest.jpg");
  egg_img = loadImage("images/egg.png");
  cave_img = loadImage("images/caves.jpg");
  meat_img = loadImage("images/meat3.jpg");
  fish_img = loadImage("images/fish1.png");
  plants_img = loadImage("images/plant.jpg");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-200);
  database = firebase.database();
  creatures = new Creatures();
  loginform = new LoginForm();
  adminform = new AdminForm();
  infoForm = new  InfoForm();
  animal = new Creatures("Woolly_Mammoth","creature area","herbivore","iceage","plants","snow","land","creature height","creature weight","no");
  
  // animal = new Creatures("Trex","creature area","herbivore","iceage","plants","snow","land","creature height","creature weight","yes");
 //animal = new Creatures("Trex","creature area","herbivore","iceage","plants","river","land","creature height","creature weight","yes");
 
 //animal = new Creatures("Trex","creature area","herbivore","iceage","plants","forest","land","creature height","creature weight","no");

}

function draw() {
  background(loginbg); 
   //background("black");
   /* loginform = new chooseCreatureForm();
    loginform.display();*/
   // loginform.display();  
    showisland = true; // coming from choose creature.js on success condition.
    
    if (showisland === true) {
      background(islandbg);
      snowIsland = createSprite(200,300,180,180);
      snowIsland.addImage("snowIsland",snowIsland_img);
      snowIsland.setCollider("rectangle",0,0,180,180);
      riverIsland = createSprite(500,400,100,100);
      riverIsland.addImage("riverIsland",riverIsland_img);
      forestIsland = createSprite(850,350,100,100);
      forestIsland.addImage("forestIsland",forestIsland_img);
      

      if(animal.mammal === "yes"){
          cave = createSprite(1000,475,200,200  );
          cave.addImage("caves",cave_img); 
          var mammal_img_name= "images/baby_"+animal.name+".jpg";
          mammal_img = loadImage(mammal_img_name);
          mammal_sprite = createSprite(100,475,50,50);
          mammal_sprite.addImage("baby_"+animal.name,mammal_img);
          mammal_sprite.setCollider("rectangle",0,0,50,50);
         
          
      }else if (animal.mammal === "no") {
          nest = createSprite(1000,500,50,50);
          nest.addImage("nest",nest_img);
          egg = createSprite(1000,475,50,50);
          egg.setCollider("rectangle",0,0,50,50);
          egg.addImage("egg",egg_img);
          //egg.depth = snowIsland.depth;
      }
    }

    
  drawSprites();
}



function mouseDragged() {
  background(islandbg);

  if (animal.mammal === "no"){
    
      egg.x = mouseX;
      egg.y = mouseY;
      // console.log("mouse x and y position"+ mouseX,mouseY)

      var forestIsaland_Flag=false;
      var snowIsland_Flag= false;
      var riverIsaland_Flag= false;
      if (isTouching(snowIsland,egg)) {
           snowIsland_Flag=true;
      } else if (isTouching(forestIsland,egg)) {
           forestIsaland_Flag =true;
      } else if (isTouching(riverIsland,egg)) {
           riverIsaland_Flag =true;
      }

      if (snowIsland_Flag === true ){
          
          if  (animal.habitat === "snow" ) {
            console.log("touched snow correctly");
            eatFood();
          }else{
            console.log("touched other than snow incorrectly");
            infoForm.display();
          }


      } else if ( forestIsaland_Flag === true ){
         
          if  (animal.habitat === "forest" ) {
            console.log("touched forest correctly");
            eatFood();
          }else{
            console.log("touched other than forest incorrectly");
            infoForm.display();
          }

      }else if ( riverIsaland_Flag === true){
        
          if  (animal.habitat === "river" ) {
            console.log("touched river correctly");
            eatFood();
          }else{
            console.log("touched other than river incorrectly");
            infoForm.display();
          }

      }



  }else if(animal.mammal === "yes"){
        mammal_sprite.x = mouseX;
        mammal_sprite.y = mouseY;
        var forestIsaland_Flag=false;
        var snowIsland_Flag= false;
        var riverIsaland_Flag= false;
        if (isTouching(snowIsland,mammal_sprite)) {
             snowIsland_Flag=true;
        } else if (isTouching(forestIsland,mammal_sprite)) {
             forestIsaland_Flag =true;
        } else if (isTouching(riverIsland,mammal_sprite)) {
             riverIsaland_Flag =true;
        }

        if (snowIsland_Flag === true ){
            
            if  (animal.habitat === "snow" ) {
              eatFood();
              console.log("touched snow correctly");

            }else{
              console.log("touched other than snow incorrectly");
              infoForm.display();
            }


        } else if ( forestIsaland_Flag === true ){
           
            if  (animal.habitat === "forest" ) {
              console.log("touched forest correctly");
              eatFood();
            }else{
              console.log("touched other than forest incorrectly");
              infoForm.display();
            }

        }else if ( riverIsaland_Flag === true){
          
            if  (animal.habitat === "river" ) {
              console.log("touched river correctly");
              eatFood();
            }else{
              console.log("touched other than river incorrectly");
              infoForm.display();
            }
        }
  }
  
}


function eatFood() {

        meat = createSprite(300,60,150,100);
        meat.addImage("meat2",meat_img);
        meat.setCollider("rectangle",0,0,150,100);
        fish = createSprite(600,60,240,100);
        fish.addImage("fish",fish_img);
        fish.setCollider("rectangle",0,0,240,100);
        plants = createSprite(900,60,130,115);
        plants.addImage("plants",plants_img);
        plants.setCollider("rectangle",0,0,130,115);
        egg.depth = plants.depth;
        egg.depth = fish.depth;
        egg.depth = meat.depth;
        console.log("animal.mammal"+animal.mammal);
        
        if (animal.mammal === "no"){
          
          //console.log("inside eat food"+ mouseX+":" +mouseY +":"+ egg.x+":"+ egg.y);

          var meat_Flag = false;
          var fish_Flag= false;
          var plant_Flag= false;
          console.log("y position"+fish.y + "egg positiony "+egg.y);
          

          if (isTouching(fish,egg)) {
              fish_Flag=true;
              
          } else if (isTouching(meat,egg)) {
              meat_Flag =true;
              console.log();
              
          } else if (isTouching(plants,egg)) {
              plant_Flag =true;
          }

          if (fish_Flag === true ){
              
              if  (animal.food === "fish" ) {
                console.log("touched fish correctly");
              }else{
                console.log("touched other than fish incorrectly");
                infoForm.display();
              }

          } else if ( meat_Flag === true ){
            
              if  (animal.food === "meat" ) {
                console.log("touched meat correctly");
              }else{
                console.log("touched other than meat incorrectly");
                infoForm.display();
              }

          }else if ( plant_Flag === true){
            
              if  (animal.food === "plants" ) {
                console.log("touched plants correctly");
              }else{
                console.log("touched other than plpants incorrectly");
                infoForm.display();
              }

          }

        }else if(animal.mammal === "yes"){
            mammal_sprite.x = mouseX;
            mammal_sprite.y = mouseY;
            var meat_Flag=false;
            var fish_Flag= false;
            var plant_Flag= false;
            if (isTouching(fish_Flag,mammal_sprite)) {
                fish_Flag=true;
            } else if (isTouching(meat_Flag,mammal_sprite)) {
                meat_Flag =true;
            } else if (isTouching(plant_Flag,mammal_sprite)) {
                plant_Flag =true;
            }

            if (fish_Flag === true ){
                
                if  (animal.food === "fish" ) {
                  console.log("touched fish correctly");

                }else{
                  console.log("touched other than fish incorrectly");
                  infoForm.display();
                }


            } else if ( meat_Flag === true ){
              
                if  (animal.food === "meat" ) {
                  console.log("touched meat correctly");
                }else{
                  console.log("touched other than meat incorrectly");
                  infoForm.display();
                }

            }else if ( plant_Flag === true){
              
                if  (animal.food === "plants" ) {
                  console.log("touched plant correctly");
                }else{
                  console.log("touched other than plant incorrectly");
                  infoForm.display();
                }

            }



      }

}