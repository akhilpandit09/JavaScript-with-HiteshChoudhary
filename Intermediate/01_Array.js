// Array is a collection of multiple item

// javascript array copy operations create shallow copies. 

// shallow copy => A shallow copy of an object is a copy whise propertise share the same refrences(point to the same underlying values)

// deep copy => A deep copy of an object is a copy whose properties do not share the same references 


let myArray = [3,4,5,6,7,7,8];
console.log(myArray.includes(7));
console.log(myArray.indexOf(3));


const newArray = myArray.join(); //it basically join the array and change it into the type from object to string

console.log(myArray);
console.log(typeof myArray);
console.log(newArray); 
console.log(typeof newArray)