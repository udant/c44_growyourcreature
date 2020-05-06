class Quiz extends Creatures{
    constructor(){
        super();
        this.animaltype = createInput('iceage');
        this.namebox = createInput('creature name');
        this.areabox = createInput('creature area');
        this.erabox = createInput('triassic/jurassic/cretacious/iceage');
        this.dietbox = createInput('herbivore/carnivore/omnivore');
        this.foodbox = createInput('meat/fish/plants');
        this.weightbox = createInput('creature weight');
        this.habitatbox = createInput('forest/snow/river');
        this.heightbox = createInput('creature height');
        this.mammalbox = createInput('mammal yes/no');
        this.sudmitbutton = createButton('check');
    }
    display(){
        this.animaltype.position(displayWidth/2 - 50,50);
        this.namebox.position(displayWidth/2 - 50, 80);
        this.areabox.position(displayWidth/2 - 50, 110);
        this.erabox.position(displayWidth/2 - 50, 140);
        this.dietbox.position(displayWidth/2 - 50, 170);
        this.foodbox.position(displayWidth/2 - 50, 200);
        this.weightbox.position(displayWidth/2 - 50, 230);
        this.habitatbox.position(displayWidth/2 - 50, 260);
        this.heightbox.position(displayWidth/2 - 50, 320);
        this.mammalbox.position(displayWidth/2 - 50, 350);
        this.sudmitbutton.position(displayWidth/2 - 50, 380);
        this.sudmitbutton.mousePressed(()=>{
           
            var animaltype=this.animaltype.value();
            var area = this.areabox.value();
            var diet = this.dietbox.value();
            var era = this.erabox.value();
            var food = this.foodbox.value();
            var habitat = this.habitatbox.value();
            var height = this.heightbox.value();
            var weight = this.weightbox.value();
            var name = this.namebox.value();
            var mammals = this.mammalbox.value();
            Creatures.getcreaturelist(animaltype+"List");
            var count = Object.keys(creaturelistdb);   
            
              /* if ((area === animal.area) && (diet === animal.diet) && (era === animal.era) && (food === animal.food) && (habitat === animal.habitat) && (height === animal.height) && (weight  === animal.weight)) {
                   
               }*/
               console.log("Quiz Cmpleted ");
               maze.display();
               
                 

    });


}
}