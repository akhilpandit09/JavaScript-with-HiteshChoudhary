//this keyword only manipulate in the object
//this keyword does not manipulate in the function declaration



const user = {
    userName: 'Akhileshwar pandit',
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to website`);
    }
}
const storeReturnValue = user.welcomeMessage();
console.log(storeReturnValue);

user.userName = 'SAM';
console.log(user.welcomeMessage());

console.log("******************function**************");
function akhil (){
    let userName = "pandit";
    console.log(this.userName);
}
akhil()

const arrowfunction = ()=>{
    let userName = "arrowfunction inside";
    console.log(this.userName);
}
arrowfunction();

const addTwo = (num1 , num2) => (num1 + num2);
console.log(addTwo(4,5));