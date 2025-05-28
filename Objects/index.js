const person ={
    name: "Jane",
    age: 20,
    greet: function(){

        console.log('inside person', this);
        console.log(`Hello there ${this.name}`);
    }
};

console.log(person.age);
console.log(person["age"]);

person.nationality = "Ethiopian";
console.log(person);

person.age = 25;
console.log(person);

delete person.nationality;
console.log(person);

person.greet();

person.introduce = ()=>{
    console.log("inside arrow fn", this); 
    console.log(`My name is ${person.name} and I am ${person.age} years old`)
};
person.introduce();

const studentList= [{name: 'Max', score: 60},{name: 'Mary', score: 40},{name: 'Faith', score: 49},{name: 'Carol', score: 70}];
 
const studentScores = studentList.filter((studentList)=> studentList.score > 50);

console.log(studentScores);



function scoresMoreThan50(studentList){
    return studentList.filter(studentList =>studentList.score>50 );
}
console.log(scoresMoreThan50(studentList));

function Car (color,name){
    this.name = name
    this.color = color
    this.introduce = function(){
        return `This car is a ${this.name} and it is ${this.color} in color`
    }
};
const car =new Car ('Blue', 'Mazda');
console.log({car});
console.log(car.introduce());


// Create a BankAccount constructor function that takes a user's 
// name and balance. Add a method called deposit(amount) that increases the 
// balance and logs the new balance, and another method withdraw(amount) that 
// decreases the balance only if there are enough funds. Create 3 user accounts 
// and simulate deposits and withdrawals.


function BankAccount(userName, balance) {
    this.userName = userName;
    this.balance = balance;

    this.deposit = function(amount) {
        this.balance += amount;
        console.log(`${this.userName} deposited ${amount} New balance: ${this.balance}`);
        return this.balance;
    };

    this.withdraw = function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`${this.userName} withdrew ${amount} New balance: ${this.balance}`);
            return this.balance;
        } else {
            console.log(`${this.userName} tried to withdraw ${amount} but has insufficient funds.`);
            return "Insufficient balance";
        }
    };
}
// Create 3 user accounts
const account1 = new BankAccount("Mike", 500)
const account2 = new BankAccount("Shalyn", 300);
const account3 = new BankAccount("Adasa", 1000);

//Deposits and withdrawals
account1.deposit(200);    
account1.withdraw(100);    

account2.withdraw(350);    
account2.deposit(100);     
account2.withdraw(200);   

account3.withdraw(500);    
account3.deposit(250);



// Create an object taskList with a property tasks (an array of task names).
// Add methods: addTask(task) to add a task, completeTask(task) to remove it, 
// and listTasks() to print all remaining tasks. Test the object with 4–5 tasks
//  and demonstrate the functionality of each method.





// Create a Student object with name, scores (an array), and a method getAverage() 
// that returns the average score. Add another method hasPassed() that returns true if 
// the average is 50 or more, otherwise false. Create and test this for at least two students.






//  Create a ShoppingCart object with a property items (an array of item objects 
// with name and price). Add a method addItem(item) to push new items, and a method 
// getTotal() that returns the total cost of all items in the cart. Add 3 items and 
// print the final total.


// Create a Movie constructor that takes title, year, and rating. Add a method isClassic()
//  that returns true if the year is before 2000, and a method recommend() that returns a 
// string like "Highly recommended!" if rating is above 8. Create at least 3 movies and 
// call these methods on each.

function Movie(title, year, rating) {
    this.title = title;
    this.year = year;
    this.rating = rating;

    this.isClassic = function() {
        return this.year < 2000;
    };

    this.recommend = function() {
        return this.rating > 8 ? "Highly recommended!" : ""; 
    };
}


const movie1 = new Movie("Step sister", 1999, 8.7);
const movie2 = new Movie("Anyone but you", 2010, 8.8);
const movie3 = new Movie("scoop", 2005, 6.2);

console.log(`${movie1.title} is classic: ${movie1.isClassic()}`);  
console.log(`${movie1.title} - ${movie1.recommend()}`);            

console.log(`${movie3.title} is classic: ${movie3.isClassic()}`);  
console.log(`${movie3.title} - ${movie3.recommend()}`);


const student = {
    name: "hope",
    school: "AkiraChix",

    greet(){
        console.log(`How are you ${student.name} `)
    }
}

console.log(student.name)
student.greet()

student.age = "20"
console.log(student)





