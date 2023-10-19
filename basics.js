const prompt = require('prompt-sync')({sigint:true});

let username = prompt("Enter a username:");
let password = prompt("Enter a password");

const userData = {
    "username": username,
    "password": password
}

console.log(`My username is ${userData.username} and password is ${userData.password}`);