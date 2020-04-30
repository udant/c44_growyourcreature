class Creatures {
//Q9 : should constructor  be null or with parameters? 
  constructor(name,area,diet,era,food,habitat,habitat1,height,weight){
        this.area = area;
        this.diet = diet;
        this.era = era;
        this.food = food;
        this.habitat = habitat;
        this.habitat1 = habitat1;
        this.height = height;
        this.weight = weight;
        this.name = name;
    }
  
    getcreaturecount(name){
        var tempname='Creatures/'+name;
        var playerCountRef = database.ref(tempname);
        playerCountRef.on("value",(data)=>{
          creaturecountdb = data.val();
        })

    }

    getcreaturelist(name){
      var templist='Creatures/'+name;
      //console.log("templist "+templist);
      var playerCountRef = database.ref(templist);
      playerCountRef.on("value",(data)=>{
        creaturelistdb = data.val();
      })
      
  }
    static readusercount(){
      database.ref('usercount').on("value",(data)=>{
        usercount = data.val();
      })
     
    }


  //Needs to be verified not required now. 
  /*  updateCount(count,name){
      database.ref('Creatures/' +name+'Count').update({
        playerCount: count
      });
    }*/
    
    update(){
     /* var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
      database.ref()*/
    }
    updateusercount(count){
      database.ref('/').update({
        usercount: count
      });
    }
    updateUser(index,user,pwd){
      var userIndex = "userList/user" + index+1;
      database.ref(userIndex).set({
        name:user,
        password:pwd
      });
    }
    static getUserInfo(){
     var x =database.ref('userList/');
     console.log(x);
     
     x.on("value",(data)=>{
        allUserInfo = data.val();
      })
    //console.log (allUserInfo);
  
    }
    static readdatalist(creaturename){
      var creaturecount = creaturename+"Count";
      var creaturelist = creaturename+"List";
     // console.log("in  readdatalist"+creaturecount);
      creatures.getcreaturecount(creaturecount);
     // console.log("out  readdatalist"+ creaturelist);
      creatures.getcreaturelist(creaturelist);
      /*for (var i = 1; i <= creaturecount; i++) {
      
       
      }*/
    }
  }

  /*var count = Object.keys(creaturelistdb);
      for( var i=0;i<count.length;i++){
          var k= count[i];
          var name_1 =   creaturelistdb[k].name;      
          console.log("Record:" + name_1);
      }*/