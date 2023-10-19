// immediatelt invoked function expression (IIFE)

// (function definition)(exection call)

// We remove the global scope polution by using the IIFE


// simple IIFE
( ()=>{
    console.log('DB connected');
})();


// named IIFE
( code= ()=>{
    console.log('DB connected second time');
})();



// named IIFE
( code2 = function(name){
    console.log(`DB connected third time with ${name}`);
})("Akhil");
