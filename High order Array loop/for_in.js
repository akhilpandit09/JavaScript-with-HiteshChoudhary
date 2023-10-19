const myobject = {
    username: "john",
    password: 2344
}

for(let key in myobject){
    console.log(`${key}: ${myobject[key]}`);
}