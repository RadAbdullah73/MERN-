class Unit {
    constructor(name , cost , power , resilience){
        this.name=name;
        this.cost=cost;
        this.power=power;
        this.resilience=resilience;
    }
    attack(attacker , defender){
       if (attacker.power < defender.power){
        return "You Lose ! , the opponent power " + defender.power + " higher than yours " + attacker.power;
       } 
       else if (attacker.power == defender.power){
        return "Nothing Happens ! your powers is equal";
       }
       else{
        defender.power -= attacker.power ;
        if (defender.power < 0){
            return "Boooooom , Your opponent is Dead";
        }
        else{
        return "Boooooooom You decrease the opponint power by " + attacker.power + " and his power became " + defender.power;
    }
        
       }

       


    }
}
const RedBelt=new Unit("Red_Belt" , 3,3,4);
const BlackBelt=new Unit("Black_Belt" , 4,7,4);


class Effect extends Unit{
    constructor(name , cost ,text,stat,magnitued){
        super(name)
        this.cost=cost;
        this.text=text;
        this.stat=stat;
        this.magnitued=magnitued;

    }
    playHardAlgo(unit){
        unit.resilience+=3;

    }
    playUnhandledPromise(unit){
        unit.resilience -= UnhandledPromiseRejection.magnitued;
    }
    playPairProgramming(unit){
        unit.power += PairProgramming.magnitued
        
    }

     
}
const HardAlgo=new Effect("Hard Algorithim",2,"increase target's resilience by 3" , "resilience" , 3);
const UnhandledPromiseRejection=new Effect("Unhandled Promise",1,"reduce target's resilience by 2" , "resilience" , 2);
const PairProgramming=new Effect("Pair Programming",3,"increase target's power by 2	" , "power" , 2);


// HardAlgo.playHardAlgo(RedBelt);
// console.log(RedBelt.resilience);
// console.log(RedBelt.resilience);
// UnhandledPromiseRejection.playUnhandledPromise(RedBelt);
// console.log(RedBelt.resilience);
console.log(RedBelt.power);
PairProgramming.playPairProgramming(RedBelt);
console.log(RedBelt.power);
// console.log(RedBelt.attack(BlackBelt,RedBelt));





