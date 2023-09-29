console.log("Jai Shree Ram");

//use of the reduce function with normal function
const numss = [1,2,3,4,5];
let initialValue = 0;
const result = numss.reduce( function (accumulator,currentValue){
    console.log(`acc ${accumulator} and currVal ${currentValue}`) //iterating to find the accumulator and current in every step of the loop of reduce
    return accumulator+currentValue;
},initialValue)  //here 0 is the initial value
console.log(result);




//use of reduce function with arrow function
const num1= [1,2,3,4];
let initialVal=0;
const res = num1.reduce((acc,curr) => acc+curr, initialVal)
console.log(res);




//use of the reduce function for adding the all price of the array of objects
const shoppingCart =[
    {
        name : "Bag",
        price : 499
    },
    {
        name : "Watch",
        price : 2499
    },
    {
        name : "Phone",
        price : 24999
    },
    {
        name : "Earbuds",
        price : 1499
    },
    {
        name : "Charger",
        price : 599
    }
]

const sumOfCart = shoppingCart.reduce((acc,item) => acc+item.price,0) //here 0 is the initial value 
console.log("Sum of price of the cart is", sumOfCart);