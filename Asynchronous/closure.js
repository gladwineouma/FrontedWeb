const outer = ()=>{
    let a = 20;
    function inner(){
        const c = 35;
        return a + c;
    }
    return inner;
};
const outerFunction = outer();
console.log(outerFunction());