class Form {

    constructor() {
      this.input = createInput("Userame");
      this.button = createButton('Play');
      this.trex = createButton('T_rex');
      this.mammoth = createButton('Mammoth');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.choose = createElement('h3');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.trex.hide();
      this.mammoth.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Grow Your Creature");
      this.title.position(displayWidth/2 - 50, 0);
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.trex.position(displayWidth/2,200);
        this.mammoth.position(displayWidth/2,270);
        //text("Choose your creature",displayWidth/2,100);
        this.choose.html("Choose your creature")  ;      
        this.choose.position(displayWidth/2,100) ;       
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
  
      });
      /*this.trex.mousePressed(()=>{

  
      });*/
    }
    
  }
 