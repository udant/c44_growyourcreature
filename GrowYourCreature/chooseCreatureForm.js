class chooseCreatureForm {

    constructor() {
      this.dinobutton = createButton('Dinosaurs');
      this.iceagebutton = createButton('IceAge');
      this.title = createElement('h2');
      this.choose = createElement('h3');
    }
    hide(){
      this.dinobutton.hide();
      this.iceagebutton.hide();
    
      this.choose.hide();
    }
  
    display(){
      //Q2: How to add image to buttons ?
      this.title.html("Grow Your Creature");
      this.choose.html("Choose Your Creature");
      this.title.position(displayWidth/2 - 50, 0);
      this.choose.position(displayWidth/2 - 50, 100);
      this.dinobutton.position(displayWidth/2 - 50, 400);
      this.iceagebutton.position(displayWidth/2 + 50, 400);
      //Q4: How to change  size of button?
      
      this.iceagebutton.mousePressed(()=>{
        console.log("iceagebutton pressed");  
        Creatures.readdatalist("iceage");
        console.log("creaturecountdb "+creaturecountdb);
        console.log("creaturelistdb "+creaturelistdb);
        //this.hide();
        var count = Object.keys(creaturelistdb);
        for( var i=0;i<count.length;i++){
            var k= count[i];
            var name_1 =   creaturelistdb[k].name;     
            var buttonname= "iceagebutton"+i;
            buttonname = createButton(name_1);
            buttonname.position(displayWidth/2 - 50 , 400 + 30*i);
            console.log("Record:" + name_1);
        }
        //this.hide();
      });
     //Q9earlier buttons to be disabled, but every button has to be clicked twice to work correctly. 
      this.dinobutton.mousePressed(()=>{
        console.log("dinobutton pressed");  
        Creatures.readdatalist("dino");
        console.log("creaturelistdb "+creaturelistdb);
        //this.hide();
        var count = Object.keys(creaturelistdb);
        for( var i=0;i<count.length;i++){
            var k= countd[i];
            var name_1 =   creaturelistdb[k].name;     
            var buttonname= "dinobutton"+i;
            buttonname = createButton(name_1);
            buttonname.position(displayWidth/2 - 50 , 400 + 30*i);
            console.log("Record:" + name_1);
        }

      });
      
    }
    
  }
  