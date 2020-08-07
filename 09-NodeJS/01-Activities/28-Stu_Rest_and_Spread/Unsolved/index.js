// 1. Copy the songs array into another array using spread and console.log what it returns.
const songs = ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];

const songs2 = ["Whatever Lola Wants", ...songs, "Summertime", "Plush"];

const copiedSongs = [ ...songs]
console.log(copiedSongs);

console.log(songs2); 

// 2.  Modify the add function so that is uses the rest operator and maintains the same functionality. 
// You should still be able to pass in any number of arguments. Run the code first in your console to see the functionality.

function addition(x, y, z) {
  const array = [x, y, z];
  return array.reduce((a, b) => a + b, 0); // you don't have to change this line of code but look up reduce if you're not sure what it does here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
}
console.log(addition(1, 2, 3)); // 6

// code below here
function add(...nums) {
  let sum = 0;
  for (let num of nums) sum += num;
  return sum;
}

console.log(add(1, 2, 3));
