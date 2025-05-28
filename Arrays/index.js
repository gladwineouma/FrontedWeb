const people = ['Susan', 'Jane', 'Morris'];
console.log({ people });

//add items
people.push('Max', 'Faith');
console.log({ people });

//add at the start
people.unshift('Hellen');
console.log({ people });

//removes items at the end
people.pop();
console.log({ people });

//removes at the start
people.shift();
console.log({ people });

//looping
const nums = [10, 20, 30, 40, 73, 45];
const doubled = nums.map(item => item * 2)    //map
console.log({ doubled })

//sum of elements
let count = 0;
for (let i = 0; i < nums.length; i++) {
    count += nums[i];
   }
   console.log({ count })


   const sum = nums.reduce((acc, curr) => acc+ curr, 0);   //shorter version of (of)
   console.log({sum});

   //filter= everything that meets the condition
   const even = nums.filter(item => item % 2 ==0);
console.log({even})


//find loop for first occurence
const discover = nums.find(item => item >20);
console.log({discover});

//for each
let multipes = []
const square = nums.forEach(item => {
    multipes.push (item = item);
})
console.log({square})
console.log({multipes})



