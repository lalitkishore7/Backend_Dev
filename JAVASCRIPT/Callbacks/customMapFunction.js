function mapper(arr, fn) {
    
    // fn -> callback function which expects two arguments value and index

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let res = fn(arr[i], i);
        result.push(res);
    } 
    return result;
}

let arr = [1, 2, 3, 4, 5];

let x = mapper(arr, function square(v, i) {
    console.log(v, i);
    return v * v;
})

console.log(x);


