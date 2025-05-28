function add(num1, num2){
    const sum = num1 + num2;
    return sum;
    };
    console.log(add(20,10));
    
    
    const subtraction = function(num1,num2) {
        return num1 - num2
    };
    console.log(subtraction(50,40));


    const personAge = (birthYear) =>{
        const currentYear = new Date().getFullYear();
        const age = currentYear - Number(birthYear);
        return age;

    }
    console.log(personAge(2002));

    (function(num1,num2){
        const sum = num1 + num2;
        console.log(sum);
})(20,20);

