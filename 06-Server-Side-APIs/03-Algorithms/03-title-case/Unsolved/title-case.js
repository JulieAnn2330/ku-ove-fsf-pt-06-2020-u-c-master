// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
var words = str.split(" ")
var result = [];
for (i=0; i < words.length; i++) {
    var word = words[i].split("");
    word[0]= word[0].toUpperCase();
    result.push(word.join(""));
} 
return result.join(" ");
};
console.log(titleCase("this is a string"));
