/*var dogs = {
    raining: true,
    noise: 'woof!',
    makeNoise: function makeNoiseAnimals() {
        if (this.raining.dogs === true);
        console.log("Woof!");
    }
};

var cats = {
    raining: false,
    noise: 'Meow!',
    makeNoise: function makeNoiseAnimals() {
        if (this.raining.cats === true);
        console.log("Meow!");
    }
};

makeNoiseAnimals();

function massHysteria() {
    if (this.raining.cats === true && this.raining.dogs === true)
    console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!')
}

massHysteria();*/

function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = () => {
      if (this.raining === true) {
        console.log(this.noise);
      }
    };
  }
  
  // Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
  const dogs = new Animal(true, "Woof!");
  const cats = new Animal(false, "Meow!");
  
  // Calling dogs and cats makeNoise methods
  dogs.makeNoise();
  cats.makeNoise();
  
  // If we want, we can change an objects properties after they're created
  cats.raining = true;
  cats.makeNoise();
  
  const massHysteria = (dogs, cats) => {
    if (dogs.raining === true && cats.raining === true) {
      console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
  };
  
  massHysteria(dogs, cats);