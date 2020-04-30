class AdminForm extends Creatures{
    constructor(){
        super();
        this.animaltype = createInput('dino/iceage');
        this.namebox = createInput('creature name');
        this.areabox = createInput('creature area');
        this.erabox = createInput('triassic/jurassic/cretacious/iceage');
        this.dietbox = createInput('herbivore/carnivore/omnivore');
        this.foodbox = createInput('meat/fish/plants');
        this.weightbox = createInput('creature weight');
        this.habitatbox = createInput('forest/snow/river');
        this.habitat1box = createInput('water/land/air');
        this.heightbox = createInput('creature height');
        this.sudmitbutton = createButton('add');
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
        this.habitat1box.position(displayWidth/2 - 50, 290);
        this.heightbox.position(displayWidth/2 - 50, 320);
        this.sudmitbutton.position(displayWidth/2 - 50, 370);
        this.sudmitbutton.mousePressed(()=>{
           
            var animaltype=this.animaltype.value();
            var area = this.areabox.value();
            var diet = this.dietbox.value();
            var era = this.erabox.value();
            var food = this.foodbox.value();
            var habitat = this.habitatbox.value();
            var habitat1 = this.habitat1box.value();
            var height = this.heightbox.value();
            var weight = this.weightbox.value();
            var name = this.namebox.value();
            Creatures.getcreaturelist(animaltype+"List");
            var count = Object.keys(creaturelistdb);   

            console.log(" mocount "+count.length+"  "+ count);
                     
            creatures.updatecreature(count.length+1,animaltype,area,diet,era,food,habitat,habitat1,height,weight,name);      
            console.log("Database Entry Completed");
        });
    }

}