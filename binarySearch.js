/* Binary Search implementation on a sorted array 
    O(logn) time complexity
    O(1) space complexity
*/

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(target === arr[mid]) {
            return mid;
        } else if(target < arr[mid]) {
            right = mid - 1;
        } else {
            // target > arr[mid]
            left = mid + 1;
        }
    }
    return false;
}

module.exports = binarySearch;