class InfoForm{
constructor(){
   // this.animaltype = createP();
  //  this.namebox = createP(animal.name);
   /* this.areabox = createP();
    this.erabox = createP();
    this.dietbox = createP();
    this.foodbox = createP();
    this.weightbox = createP();
    this.habitatbox = createP();
    this.habitat1box = createP();
    this.heightbox = createP();*/
    //this.sudmitbutton = createButton('OK');

}
/*hide(){
    this.namebox.hide();
    this.sudmitbutton.hide();
}*/
display(){
  //  this.animaltype = createP(animal);
    var  namebox = createP(animal.name);
    this.areabox = createP(animal.area);
    this.erabox = createP(animal.era);
    this.dietbox = createP(animal.diet);
    this.foodbox = createP(animal.food);
    this.weightbox = createP(animal.weight);
    this.habitatbox = createP(animal.habitat);
   // this.habitat1box = createP(anima);
    this.heightbox = createP(animal.height);
   var sudmitbutton = createButton('OK');
   // this.animaltype.position(displayWidth/2 - 50,50);
    namebox.position(displayWidth/2 - 50, 80);
    this.areabox.position(displayWidth/2 - 50, 110);
    this.erabox.position(displayWidth/2 - 50, 140);
    this.dietbox.position(displayWidth/2 - 50, 170);
    this.foodbox.position(displayWidth/2 - 50, 200);
    this.weightbox.position(displayWidth/2 - 50, 230);
    this.habitatbox.position(displayWidth/2 - 50, 260);
   // this.habitat1box.position(displayWidth/2 - 50, 290);
    this.heightbox.position(displayWidth/2 - 50, 290);
    sudmitbutton.position(displayWidth/2 - 50, 370);
    sudmitbutton.mousePressed(()=>{
        //showisland= true;   
        namebox.hide();
        sudmitbutton.hide();
        console.log("go to island screen");
    });  
}
}