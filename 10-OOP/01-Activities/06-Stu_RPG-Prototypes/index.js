function Character(name, profession, age, strength, HitPoints) {
    this.name= 'name';
    this.profession = 'profession';
    this.age = age;
    this.strength = strength;
    this.HitPoints = HitPoints;
}

    character.prototype.PrintStats = function() {
        console.log('Name:' + this.name + '');
    }


var Bob = new character('Bob', 'Sorcerer', 29, 10, 5);
var Steve = new character('Steve', 'Wizard', 15, 8, 8);

console.log(character);
console.log(character2);

Character.prototype.IsAlive = function () {
    if (this.HitPoints > 0);
    console.log(this.name + ' is still alive.');
}

function Attack(){
    Bob.HitPoints - Bob.strength
    
    
}

function LevelUp() {
    character.map((age, strength, HitPoints) => console.log(age + 1, ));
}