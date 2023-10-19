const myarr = [4,6,7];

const store = myarr.reduce(function(acc, currval){
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
},0);

// console.log(store);

const userCart = [
    {
        itemName: 'Js Course',
        price: 2000
    },
    {
        itemName: "Python Course",
        price: 3000
    }
];

const total = userCart.reduce((acc, item)=>{
    return acc + item.price;
},0);
console.log(total);