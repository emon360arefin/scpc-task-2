function sumPositives(array){
    let sum = 0 
    for (let number of array){
        if (number > 0){
            sum = sum + number;
        }
    }
    return(sum);
}
