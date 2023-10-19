// primitive datatypes

// 7 Types of Primitive data types
/* String, Number, Boolean, null, undefined, Symbol, BigInt */

const Score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
// let userEmail; let userEmail = undefined; (Both gives the undefined value) 

const id = Symbol('123');
const anotherId = Symbol ('123');
console.log(id === anotherId);

const bigNumber = 2324453624264646646464646464646464n;
console.log(bigNumber);
// Refrence (Non Primitive)
// Array, Objects, Functions