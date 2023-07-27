function frequents(array){
    const counts = {};
    for (let num of array){
        if(counts[num]){
            counts[num] += 1;
        }
        else{
            counts[num]=1
        }
    }
    const allCounts = Object.values(counts);
    const max = Math.max(...allCounts);
    for (let i in counts){
        if(counts[i] == max){
            return i;
        }
    }
    
}