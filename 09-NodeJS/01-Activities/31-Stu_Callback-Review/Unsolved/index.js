const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];
});

animal.JSON.forEach(animal) => {
  animal.species === 'dog'? dogs.push(animal): cats.push(animal);
}

const dogsJSON = JSON.stringify(dogs, null, 2);
const catsJSON = JSON.stringify(cats, null, 2);

fs.writeFile("dogs.json". dogsJSON, (err) => {
  if(err) {
    return err;
  }
})
console.log('dogs.json file created');

fs.writeFile("cats.json". catsJSON, (err) => {
  if(err) {
    return err;
  }
})
console.log('cats.json file created');





