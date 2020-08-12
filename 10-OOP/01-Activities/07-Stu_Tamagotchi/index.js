const DigitalPal = function() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.outside = false;
    this.houseCondition = 100;
}

DigitalPal.prototype.feed = function() {
    if(this.hungry) {
        console.log("That was yummy!");
        this.hungry = false;
        this.sleepy = true;
    } else {
        console.log("No thanks! I'm full!")
    }
}

DigitalPal.prototype.sleep = function() {
    if(this.sleepy) {
        console.log('Zzzzzzzz');
        this.sleepy = false 
        this.bored = true;
        this.increaseAge();
    } else {
        console.log("No Way! I'm not tired!")
    }
}

DigitalPal.prototype.play = function() {
    if (this.bored) {
        console.log("Yay! Let's play!");
        this.bored = false;
        this.hungry = true;
     } else {
         console.log("Not right now. Later?");
     }
};

DigitalPal.prototype.increaseAge = function() {
    if(this.sleepy) {
        this.sleepy = true;
        this.age ++;
        console.log("Happy Birthday to me! I am " + this.age + " old!");
    }
};

DigitalPal.prototype.bark = function() {
    console.log("Woof! Woof!");
};

DigitalPal.prototype.goOutside = function() {
    if(this.outside) {
        console.log("Yay! I love the outdoors!");
        this.outside = true
        this.bark();
    } else {
        console.log("We're already outside though ...")
    }
};

DigitalPal.prototype.goInside = function() {
    if(this.outside) {
        console.log("Do we have to? Fine ...");
        this.outside = false;
    } else {
        console.log("I'm already inside ...");
    };
};

DigitalPal.prototype.meow = function() {
    console.log("Meow! Meow!");
};

DigitalPal.prototype.destroyFurniture = function() {
    if (this.houseCondition - 10 > 0) {
        this.houseCondition -= 10;
        this.bored = false;
        this.sleepy = true;
        console.log("Muahahahahaha! Take that furniture!");
    }  else {
        console.log("I've already destryoed it all!")
    }
}

DigitalPal.prototype.buyNewFurniture = function() {
    this.houseCondition += 50;
    console.log("Are you sure about that?");
};

const animals = {};

animals.dog = new DigitalPal() 
animals.cat = new DigitalPal()

const animal = process.argv[2];
const method = process.argv[3];

animals[animal][method]();