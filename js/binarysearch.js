/**
 * Created by santhoshkumar on 16/09/15.
 */

// Non-recursive binary search implementation

function BinarySearch(sortedArray,searchItem){

    var left = 0;
    var right = sortedArray.length-1;
    var mid;
    while(left<=right){
        // ensure that you add left when calculating mid, else ou will risk of getting into infinite loop
        mid = left+parseInt((right-left)/2);
        if(sortedArray[mid] === searchItem){
            return mid;
        }
        if (sortedArray[mid] > searchItem){
            right = mid -1;
        }else{
            left = mid +1;
        }
    }
    return -1;
}

var a = [1,2,3,4,5,6,7,8,9,11];
var b = 1;
console.log("Sorted array: "+ a);
console.log("Search item: "+ b);
console.log("Item found at index: "+BinarySearch(a,b));