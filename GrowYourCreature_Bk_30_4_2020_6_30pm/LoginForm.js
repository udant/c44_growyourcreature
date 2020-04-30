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
      if( username != null && pwd != null){
              console.log("not null value"+allUserInfo);
              Creatures.getUserInfo();
              if(allUserInfo != undefined){
                console.log (allUserInfo);
               /* Q6: allUserInfo variable has below data, but using for loop , plr.name/ plr.password prints "undefined"
               {admin: {…}, user1: {…}}
                admin:
                name: "admin"
                password: "admin123"
                __proto__: Object
                user1:
                name: "udant"
                password: "udant123"
                __proto__: Object
                __proto__: Object*/
                var found = false;
                var adddb = false;
                var relogin = false;
                    /*for(var plr in allUserInfo){
                        console.log("plr ::"+plr.name + "::pwd::" + plr.password);
                        if (username === plr.name && pwd === plr.password) {
                            //console.log("go to island  screen ");
                            found =true;
                        }else if (username === plr.name && pwd != plr.password) {
                            //console.log("throw to login page");
                            relogin =true;
                        }else if (username != plr.name ) {
                            adddb = true;
                        }
                    }*/

                    adddb =true;

                    if(found === true){
                      console.log("go to island  screen ");

                    }else if (found === false && adddb === true) {
                      Creatures.readusercount();
                      console.log("add to db"+ usercount);
                      creatures.updateUser(usercount,username,pwd);
                      creatures.updateusercount(usercount);
                      console.log("dbadduser completed");
                      loginform.hide();
                      choosecreatureform = new chooseCreatureForm();
                      choosecreatureform.display();
                      //Q7: Database is not reading any values & storing in variables.
                    }else if (found === false && relogin === true) {
                      console.log("throw to login page");

                    }
                    
              }

      }

      console.log("username"+username+"Password"+pwd+'::');
    });
    
  }
   mousePressed(){

   }
}
 
 