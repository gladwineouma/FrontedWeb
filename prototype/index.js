function Person (name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        return `Hello`
    };
};
 const anne = new Person("Anne", 25);
 Person.prototype.nationality = "Kenyan"
 console.log({anne});
 console.log(anne.nationality)


 const array = [1,2,3,4,5];
 const sum  = array.reduce((acc,curr)=>{
    return acc+curr},0)
    console.log(sum)

const scores = [40,56,78,90];
const add = scores.reduce((acc,curr)=>
{
    return acc + curr 
},0)
console.log(add)

const orders = [23,45,67,89]
const total = orders.reduce((acc,curr)=>{
    return acc+curr
},0)
console.log(total)

const people = [{name: "Shirley", age: 20, city:"New York"},
                {name: "Sandra", age: 23, city:"Nairobi"},
                {name: "Salma", age: 18, city:"Kisumu"},
                {name: "Susan", age: 19, city:"Cape town"}]
const groupedByAge = people.reduce((acc, currPerson)=>{
    const age = currPerson.age;
    if(!acc[age]){
        acc [age] = [];
    }
    acc[age].push(currPerson);
    return acc;
},{});

console.log(groupedByAge)

const numbers = [2,3,4,5,6];
const squaredNumbers = numbers.map(function(numbers){
    return numbers * numbers
})
console.log(numbers)
console.log(squaredNumbers)

const add4 = [3,4,5,6]
const squareRoots = add4.map(function(add4){
    return add4 + 4
})
console.log(squareRoots)


const addition = [2,3,4,5,6]
const add3 = addition.map(function(add3){
    return add3 + 3
})

console.log(add3)

const check = [1,3,4,5,6]
const get = check.find(function(get){
    return get > 3
})
console.log(get)

//Create an Employee class with properties name and salary, and a method getDetails. Use a prototype to
//add a method giveRaise that increases salary by percentage. Create a manager class that extends Employee
//adding a department property and overriding getDetails to include department

class Employee {
    constructor (name, salary){
        this.name = name;
        this.salary = salary
    }
    getDetails(){
        return (`My name is ${this.name} my salary is ${this.salary}`)
    }
}

Employee.prototype.incrementSalary = function(percent){
    return this.salary * percent/100 + this.salary
} 

class Manager extends Employee{
    getDetails(){
        super.getDetails(department);{
            this.department= this.department
            return department
        }
    }
    
}

const jane = new Employee("Jane", 50000)
console.log(jane)
console.log(jane.incrementSalary(20));
console.log(jane.getDetails("Health department"));
const judy = new Manager("Judy",40000)
console.log(judy)
console.log(judy.Manager("Health department"))
