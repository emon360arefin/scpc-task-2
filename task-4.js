function targetSum(array,target){
    let pair = [];
    for (let i of array){
        for (let j in array){
            let sum = 0;
            if (array.indexOf(i) !== j){
                sum = i + array[j]
            }
            if(sum == target){
                pair.push(array.indexOf(i))
                pair.push(parseInt(j))
                return pair
            }
        }
        
    }
}

// console.log(targetSum([1, 3, 6, 11, 15], 9));