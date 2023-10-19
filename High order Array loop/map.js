const map = new Map();

map.set('NP',"Nepal");
map.set('IN',"India");
map.set('FR',"France");
// console.log(map);

for(const [key, value] of map){
    // console.log(`${key} : ${value}`)
}
// console.log(typeof map);




// object
const myobj = {
    name: 'akhil',
    age: 23
}

for(const key in myobj){
    console.log(`${key} is ${myobj[key]}`);
}

// array

const programming = [
    'java',
    'python',
    'javasccript'
]

for(const key in programming){
    console.log(`programming Language is ${programming[key]}`)
}