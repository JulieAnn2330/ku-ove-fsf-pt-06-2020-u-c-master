// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    var obj = { };
    for (var i = 0; i < str.length; i++ ) {
    var char = str[i];
    if (char in obj) {
        obj[char]++ 
    }   else {
        obj[char]=1
    }
    }

    return obj
    
};
console.log(characterCount('hello'));