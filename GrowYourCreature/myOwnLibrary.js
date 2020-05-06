function isTouching(object1,object2){
//console.log("object1.x - object2.x < object2.width/2 + object1.width/2" +(object1.x - object2.x < object2.width/2 + object1.width/2));
//console.log("object2.x - object1.x < object2.width/2 + object1.width/2" + (object2.x - object1.x < object2.width/2 + object1.width/2));

/*console.log("object1.y: "+object1.y);
console.log("object2.y: "+object2.y);
console.log("object2.height/2:"+object2.height/2);
console.log("object1.height/2:"+object1.height/2);
console.log("success: "+(object1.y-object2.y < object2.height/2 + object1.height/2));

//console.log("object1.y-object2.y < object2.height/2 + object1.height/2" +(object1.y-object2.y )+" :" +(object2.height/2 + object1.height/2) );
//console.log("Condition"+(object1.y-object2.y < object2.height/2 + object1.height/2));

//console.log("object2.y-object1.y < object2.height/2 + object1.height/2" + (object2.y-object1.y < object2.height/2 + object1.height/2));
console.log("umaumauma");
console.log("umaumauma");*/
//

//console.log("object2 "+object2.x + " y" +object2.y +" h"+object2.height +"w" +object2.width) ;

    if( object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2  && 
      object1.y-object2.y < object2.height/2 + object1.height/2 && object2.y-object1.y < object2.height/2 + object1.height/2){

  //      console.log("Calculated value: " + (object1.x - object2.x) + " :"+object2.width/2 + object1.width/2);
   //     console.log("Line 1 in loop object1 "+object1.x + " y" +object1.y +" h"+object1.height +"w" +object1.width) ;
    //    console.log("  Line 2 in loop object2 "+object2.x + " y" +object2.y +" h"+object2.height +"w" +object2.width) ;
        
        return true; 
    }
    else{
     return false;
    }
  }
/*function bounceOff(object1,object2){
   if(object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2  ){
     object1.velocityX = object1.velocityX * (-1) ;
     object2.velocityX = object2.velocityX * (-1) ;
     }
    
     if( object1.y-object2.y < object2.height/2 + object1.height/2 && object2.y-object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1) ;
      object2.velocityY = object2.velocityY * (-1) ;
     }
    
  }*/
