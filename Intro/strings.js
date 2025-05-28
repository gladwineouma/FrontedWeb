let greetings = "hello";
console.log(greetings[2]);
console.log(greetings[greetings.length -1]);
console.log(greetings[4]);

greetings[2] = 'f';
const replaced = greetings.replace(greetings[2], 'f');
console.log({replaced});

let world = ' world';
console.log (greetings + '' + world);

const combine =`${greetings} ${world}`;
console.log({combine}); 

let text = "This is going to be okay"     //split
console.log(text.split ())
console.log(text.split (''))
console.log(text.split (' '))
console.log(text.split ('',2))


console.log(text.slice (0,9))      //slice
console.log(text.slice (5,9))

let name = ' Hope worldwide kenya '    //split or trim
console.log(name)
console.log(name.trim())

let result = "  Hello World!  ".trim().slice(6).split(" ");   //combining split,slice and trim
console.log(result)

let stmt = "I love eating" //





