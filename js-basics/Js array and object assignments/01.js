/*1. **Sum values in object arrays**
    - Input:
        { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] } 
    - Output:
        { food: 60, travel: 20, bills: 100 } */


const obj ={
    food: [10, 20, 30],
    travel: [5, 15],
    bills: [40, 60]
}
const result = {};

for (const [key, value] of Object.entries(obj)){
    let sum = 0;

    for(let i = 0; i < value.length; i++){
        sum += value[i];
    }
    result[key] = sum;
}

console.log(result);


