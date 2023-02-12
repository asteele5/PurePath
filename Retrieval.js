class Retrieve {
    constructor(possibleRestaurants) {
        this.possibleRestaurants = possibleRestaurants; 
        const optimalRestaurants = {
            top10() {
                array; 
                mergeSort(possibleRestaurants); 
                i = 0; 
                while (possibleRestaurants[i] != undefined && i < 10) {
                    array[i] = possibleRestaurants[i]; 
                    i++; 
                } 
                return array; 
            }
        }
    }

    mergeSort(array) {
        const half = array.length / 2
        
        // Base case or terminating case
        if(array.length < 2){
          return array 
        }
        
        const left = array.splice(0, half)
        return merge(mergeSort(left),mergeSort(array))
    }

    merge(left, right) {
        let arr = []
        // Break out of loop if any one of the array gets empty
        while (left.length && right.length) {
            // Pick the smaller among the smallest element of left and right sub arrays 
            if (left[0].avg < right[0].avg) {
                arr.push(left.shift())  
            } else {
                arr.push(right.shift()) 
            }
        }
        
        // Concatenating the leftover elements
        // (in case we didn't go through the entire left or right array)
        return [ ...arr, ...left, ...right ]
    }
}