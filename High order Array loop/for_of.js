const arr = [3,4,6,7,7];
for(const num of arr){
    console.log(num);
}

let greeting = 'hello world';
for (const greet of greeting){
    if(greet === " "){
        break;
    }else{
        console.log(greet);
    }
}