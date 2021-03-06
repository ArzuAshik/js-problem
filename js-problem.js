function rotateLeft(arrayLength, rotateAmount, arr){
    let rotate = rotateAmount;
    if(rotateAmount > arrayLength){
        rotate = rotateAmount % arrayLength;
    }

    if(rotate === 0) return arr;
    
    const newArray = [];
    for(let i = rotate; i < arrayLength; i++){
        newArray.push(arr[i]);
        if(i === arrayLength - 1){
            i = 0;
            newArray.push(arr[i]);
        }
        if(i === rotate - 1){
            break;
        }
    }
    return newArray;
}

const result = rotateLeft(5, 511, [1, 2, 3, 4, 5]);

console.log(result);

// 0. 1 2 3 4 5

// 1. 2 3 4 5 1
// 2. 3 4 5 1 2
// 3. 4 5 1 2 3
// 4. 5 1 2 3 4
// 5. 1 2 3 4 5