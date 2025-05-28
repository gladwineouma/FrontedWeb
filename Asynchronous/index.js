const greet = ()=>{
    console.log("Hello there");
    
};

const hello = (name, greet)=>{
    console.log(`My anme is ${name}`);
    greet();
}; 
hello("Jane", greet);


setTimeout(()=>{
    console.log("This is a timeout delay")
},2000);


let count = 0;
const interval =  setInterval(()=>{
    console.log("This is a repeting delay");
    count +=1;
    if(count == 3){
        clearInterval(interval);
    }
    },3000)

