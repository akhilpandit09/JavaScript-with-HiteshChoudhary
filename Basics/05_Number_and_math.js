const score =400;
console.log(score);

const balance = new  Number(100);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumebr = 123.5664;
console.log(otherNumebr.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));


console.log('******Math*********')


console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.3)); //5
console.log(Math.floor(5.6)); //5
console.log(Math.min(4,6,7,5,4,3)) //3
console.log(Math.max(4,6,7,5,4,3)) //7

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min =10;
const max = 20

console.log(Math.floor(Math.random()* (max-min + 1))+min)