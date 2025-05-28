const getItems = (inventory) => {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i] > 0) {
            console.log('item found');
        }
        else {
            console.log('item not foumd');
        }
    }
};

const inventory = [20, 5, 3, 40, 0, 21];
getItems(inventory);





////else, else if method

//example 1
const getGrades = (scores) => {
    for (let i = 0; i < scores.length; i++) {

        if (scores[i] >= 85) {
            console.log(`Your score is ${scores[i]} and your grade is A`)

        }
        else if (scores[i] >= 75 && scores) {
            console.log(`Your score is ${scores[i]} and your grade is B`)
        }
        else if (scores[i] >= 65 && scores) {
            console.log(`Your score is ${scores[i]} and your grade is C`)

        }
        else if (scores[i] >= 55 && scores) {

            console.log(`Your score is ${scores[i]} and your grade is D`)

        }
        else {
            console.log(`Your score is ${scores[i]} and your grade is E`)
        }



    }
}
const scores = [85, 92, 100, 65, 24, 55, 75]
getGrades(scores);

//example2

// const getGrades = (scores) => {
//     for (let i = 0; i < scores.length; i++) {
//         let grade;

//         if (scores[i] >= 85) {
//             grade = 'A';

//         }
//         else if (scores[i] >= 75 && scores) {
//             grade = 'B'
//         }
//         else if (scores[i] >= 65 && scores) {
//             grade = 'C';

//         }
//         else if (scores[i] >= 55 && scores) {

//             grade = 'D'

//         }
//         else {
//             grade = 'E'
//         }


//         console.log(`Your score is ${scores[i]} and your grade is ${grade}`)
//     }
// }

// const scores = [85, 92, 100, 65, 24, 55, 75]
// getGrades(scores);


//calculate income tax
function calculateTax(income) {
    let tax = 0;
    if (income <= 10000) {
        tax = income * 0.10; // 10% tax for income up to $10,000
    } else if (income <= 40000) {
        tax = 1000 + (income - 10000) * 0.20; // 20% tax for income between $10,001 and $40,000
    } else if (income <= 80000) {
        tax = 7000 + (income - 40000) * 0.30; // 30% tax for income between $40,001 and $80,000
    } else {
        tax = 19000 + (income - 80000) * 0.40; // 40% tax for income above $80,000
    }
    return tax;
}

// Example usage:
let income = 50000;
let taxAmount = calculateTax(income);
console.log("The tax amount for an income of $" + income + " is: $" + taxAmount);

income = 90000;
taxAmount = calculateTax(income);
console.log("The tax amount for an income of $" + income + " is: $" + taxAmount);




//switch
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's the start of the week");
        break;
    case "Friday":
        console.log("It's almost weekend");
        break;
    default:
        console.log("It's a regular day");
}








const fruits = ['apple', 'avocado', 'grapes', 'orange', 'banana', 'cheery']
const getFruits = (fruits) => {
    for (let i = 0; i < fruits.length; i++) {
        switch (fruits[i]) {
            case 'mango':
                console.log('This is a mango');
                break;
            case 'avocado':
                console.log('This is an avocado');
                break;
            case 'grapes':
                console.log('This is a grape');
                break;
            case 'orange':
                console.log('This is an orange');
                break;
            case 'banana':
                console.log('This is my favourite fruit');
                break;
            default:
                console.log('This is out of stock')



        }
    }
}
getFruits(fruits)



const multiples = () => {
    for (let i = 1; i <= 100; i++)
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`FizzBuzz`)
        }
        else if (i % 5 === 0) {
            console.log(`Buzz`)
        }
        else if (i % 3 === 0) {
            console.log(`Fizz`)
        }
        else {
            console.log(`${i}`)
        }

}


multiples();

//while loop
const logInAttemps = (maxAttempts) => {
    let attempts = 1;
    while (attempts <= maxAttempts) {
        console.log(`Log in attempts ${attempts}`)
        attempts++;
    }

}
logInAttemps(3);

//do while
const logInAttempsDoWhile = (maxAttempts) => {
    let attempts = 1;
    do {
        console.log(`login attempts with do....while${attempts}`)
        attempts++
    }
    while (attempts <= maxAttempts)
}
logInAttempsDoWhile(3);


const sendNotifications = (notification) => {
    notification.forEach((notification) => {
        switch (notification) {
            case "sms":
                console.log("Send sms");
                break
            case "Push":
                console.log("Send push notification")
                break
            case "Email":
                console.log("send Email");
                break;
            default:
                console.log("Notification type not supported");
                break
        }
    })
}

const notification = ["sms", "Email", "Push", "text"];
sendNotifications(notification)



function access(roles) {
    roles.forEach((role) => {
        switch (role) {
            case "admin":
                console.log("Admin acces");
                break

            case "viewer":
                console.log("Viewer's access");
                break;

            case "commentor":
                console.log("Commentors access");
                break;

            case "editor":
                console.log("Editors access");
                break;
            default:
                console.log("The role is not supported");
                break;
        }
    })
}

const roles = ['admin', 'viewer', 'commentor', 'editor','owner'];
access(roles);

    




