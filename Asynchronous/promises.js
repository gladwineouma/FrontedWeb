const passExam = false;
const getPhone = new Promise(function(resolve,reject){
    if(passExam){
        resolve("Here is your phone");
    }
    else{
        reject("You do not get a phone");
    };
}).then((response)=>{
    return response
    
}).catch((error)=>{
    return error
    
}).finally(()=>{
     return "Keep doing your best";
    
});

async function getPhoneAsync() {
    const results = await getPhone;
    console.log({results});
    
}
getPhoneAsync();




const graduate = true

const getJob = new Promise((resolve,reject)=>{
    if(graduate){
        setTimeout(()=>{
            resolve("You got a job")
        },2000)
    }else{
        setTimeout(()=>{
            reject("You did not get a job")
        },2000)

    } 
}) 
const getJobAsync = async()=>{
    try{
        let results = await getJob;
        console.log(({results}));
        
    }catch (error){
        console.log(({error}))
    }
};
getJobAsync();
