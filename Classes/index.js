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
 console.log(anne.nationality);
 console.log(anne.greet())

 function Driver(name, carModel, ratings){
    this.name = name,
    this.carModel= carModel,
    this.ratings = ratings
 }
 Driver.prototype.getDetails = function (){
    return `The driver's name is ${this.name} and the car model is ${this.carModel}`
 }

 Driver.prototype.topRated = function(){
    if (this.ratings > 4.5){
        return true
    }else{
        return false
    }
 }

 const Dan = new Driver("Dan","Subaru", 5);
 console.log(Dan);
 console.log(Dan.getDetails());
 console.log(Dan.topRated());


 class Car{
    constructor(color,model){
        this.color = color;
        this.model = model;
    };
    accelerate(speed){
        return `The ${this.model} accelerate at ${speed}km/hr`
    }
 };

 const toyota = new Car ("Blue", "Toyota");
 console.log({toyota});
 console.log(toyota.accelerate(80))

class Student {
    constructor(name,course,scores){
        this.name = name,
        this.course = course,
        this.scores = scores
    }
  

}
Student.prototype.getAverageScore = function(){
    let sum = 0
    for(let i=0; i<this.scores.length; i++){
        sum += this.scores[i]
    }
    return sum/this.scores.length
}
Student.prototype.isPasing = function(){
    return this.getAverageScore() > 50
}
Student.prototype.totalScores = function(){
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
        sum += this.scores[i]; 
    
}
}

const Grace = new Student("Grace", "English",[40,56.79]);
console.log(Grace);
console.log(Grace.getAverageScore());
console.log(Grace.isPasing())


class Order {
    constructor (orderId, products){
        this.orderId = orderId,
        this.products =products
}
 getTotalSum(){
    return this.products.reduce((sum,product)=> sum + (product.price || 0),0);
 };
};
const cosmetics = new Order (1,[{name: "Body oil", price: 400},{name: "Shower Gel",price: 300}]);
console.log("Total order amount: ",cosmetics.getTotalSum());
                                                                                                                                                                                                                                                                                                    