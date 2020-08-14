function Algo() {}

Algo.prototype.reverse = function reverseString(str) {

    var splitString = str.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join(""); 

    return joinArray;
}
 
reverseString("Hello World!");

Algo.prototype.isPalindrome = function(str) {};


Algo.prototype.capitalize = function(str) {};

module.exports = Algo;
