let a = 5;
let b = "5";

const equal = a != b? true:false;
console.log({equal}); 

const strictlyEqual = a !== b? true:false;
console.log({strictlyEqual});

//const add = a + b;
//console.log({add});

const add = +b +a;
console.log({add});

console.log (Number(b) +a);