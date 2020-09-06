// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    var count = 0;
    var vowelsArr = ['a', 'e', 'i', 'o', 'u']
    for (var i = 0; i < str.length; i++) {
         for (var k = 0; k < vowelsArr.length; k++) {
            if (str[i].toLowerCase() === vowelsArr[k]) {
                count +=1
         }
       }
    } 
    return count;
};
