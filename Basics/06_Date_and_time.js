let myDate = new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCretedDate = new Date(2023, 0, 23);
let myCretedDate = new Date("01-23-2023");
// console.log(myCretedDate.toDateString());
console.log(myCretedDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp); //output of time in millisecond
console.log(myCretedDate.getTime()); //output of clone in millisecond