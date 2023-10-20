// basically promise used in Database calls, cryptography, and network call


// here we only create a promise 
const promiseone = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve(); //here we resolved the function thats why we call consume the function below
    },1000);
})
// now we can consumed the promises
promiseone
.then(function(){
    console.log("promised consumed");
})


// there is no required to store promise in variable
new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000);
})
.then(function(){
    console.log('async task 2 resolved');
})


// promise number 3
const promiseThree = new Promise((resolve, reject)=>{
    setTimeout( ()=>{
        resolve({userName: "akhil", email:"akhil@gmail.com"})
    },1000)
})
promiseThree
.then((user)=> console.log(user))

// promise four
new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({userName:"akhil", password:"123"})
        }else{
            reject('Error: something went wrong');
        }
    },1000)
})
.then((user)=>{
    // console.log(user);
    return user.userName;
})
.then((username)=> console.log(username))
.catch((error)=> console.log(error))
.finally(()=> console.log("The promise is either resolved or reject"))

// promise 5
// In this promise now we can used async...await function and try...catch
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username:"javascript", password:"2123"})

        }else{
            reject("Error: JS went wrong");
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response.username);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

async function getAllUsers(){
    try {
        const response = await fetch ('http://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data[0]);
    } catch (error) {
        console.log("E:", error);
    }
}
getAllUsers();

fetch ('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
}).then((response)=>{
    console.log(response);
}).catch((error)=> console.log(error))


// Promise.all() => yes this is also available



