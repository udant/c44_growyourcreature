class LoginForm {

  constructor() {
    this.input1 = createInput("Userame");
    this.input2 = createInput("Password");
    this.button = createButton('Play');
    this.title = createElement('h2');
  }
  hide(){
    this.button.hide();
    this.input1.hide();
    this.input2.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Grow Your Creature");
    this.title.position(displayWidth/2 - 50, 0);
    this.input1.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.input2.position(displayWidth/2 - 40 , displayHeight/2 - 50);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
     this.button.mousePressed(()=>{
      var username=this.input1.value();
      var pwd=this.input2.value();
      //Q3: how to comapre with null inputs, below condition not workinng. 
      if(username != null || pwd != null){
              console.log("not null value"+alluserinfo);
              Creatures.getUserInfo();
              if(alluserinfo != undefined){
                      var found = false;
                      var adddb = false;
                      var relogin = false;
                      var admin=false;
                      var count = Object.keys(alluserinfo);
                      for( var i=0;i<count.length;i++){
                          var k= count[i];
                          var name_db =   alluserinfo[k].name;
                          var password_db  =   alluserinfo[k].password;
                          if (username === "admin" && pwd === "admin123" ){
                            console.log("open admin page ");
                            adminform.display();
                            //this should be hidden.
                           this.hide();
                            break;
                          }else if (username === name_db && pwd === password_db) {
                              found =true;
                          }else if (username === name_db && pwd != password_db) {
                              relogin =true;
                          }else if (username != name_db ) {
                              adddb = true;
                          } 
                      }
                    
                    if(found === true){
                          console.log("go to island  screen ");
                    }else if (found === false && adddb === true) {
                          creatures.updateUser(count.length,username,pwd);
                          console.log("dbadduser completed");
                          loginform.hide();
                          choosecreatureform = new chooseCreatureForm();
                          choosecreatureform.display();
                          //Q7: Database is not reading any values & storing in variables.
                    }else if (found === false && relogin === true) {
                      console.log("throw to login page");
                          loginform.display();
                    } 
                    
              }

      }

      console.log("username"+username+"Password"+pwd+'::');
    });
    
  }
   mousePressed(){

   }
}
 
 