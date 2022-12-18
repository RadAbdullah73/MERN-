class Ninja {
    constructor(name,health){
        this.name=name ;
        this.health=health;
        this.speed=3;
        this.stringth=3;
    }
    sayName = () => console.log(this.name);
    showStats = () => console.log(this.name , this.health , this.speed , this.stringth);
    drinkSake = () => console.log(this.health +=10);
}

// const ninja1 = new Ninja("Hyabusa" , 20);
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health=200;
        this.speed=10;
        this.stringth=10;
        this.wisdom = 10 ;

}
  speakWisdom (){
     return this.drinkSake()
}

}
const sensei1 = new Sensei("Ra'd");
console.log(sensei1.wisdom);
sensei1.speakWisdom();
sensei1.speakWisdom();
console.log(sensei1.name);
sensei1.showStats();