

var linearSearch = function(arr, target) {
    for(i=0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i
        } 
    }
    return -1;
};
console.log(linearSearch([4, 22, 45, 50], 4));