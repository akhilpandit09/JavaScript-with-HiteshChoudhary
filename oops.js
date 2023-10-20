// 01. Object literal

const user = {
    username: "Akhil",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log`Got user details from database => Username: ${this.username}`;
        console.log(this)
    }
}
// console.log(user.getUserDetails());

// 02. Constructor function => it gives us a new copy(i.e. new instance) of a function 

function User (username, loginCount, isLoggedIn){
    this.username = username || 'default';
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log("this is a greeting function")
    }

    return this; // basically return this is a by default
}

const userOne = new User("akhil", 23, true);
const userTwo = new User('ram', 23, false);
console.log(userOne);
console.log(userTwo);


