const { runInThisContext } = require("vm");

class Character {
  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }

  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
   if((this.hitPoints > 0)) {
      returntrue;
    } else {
      return false;
      end;
    }
   } 
  

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
        // console.log which character was attacked and how much damage was dealt
        console.log(`Opponent (${opponent.name}) was attacked for ${this.strength} damage`)
    // Then, change the opponent's hitPoints to reflect this
    opponent.hitPoints = opponent.hitPoints - this.strength;
  }
}


// Create two unique characters using the "character" class
const bruno = new Character('Bruno', 1, 100);
const igor = new Character('Igor', 50, 75);

// Create an interval that alternates attacks every 2000 milliseconds
igor.printStats()
bruno.printStats()

igor.attack(bruno)

bruno.attack(igor)