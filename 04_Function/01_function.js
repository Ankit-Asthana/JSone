console.log("Jai Shree Ram");
function addOrder(username,price,payment){
    return console.log(`Order is placed for ${username} of price ${price} and the payment is ${payment}`);
}
const result = addOrder("Ankit",499,true);
console.log(result);


//second function with the conditional operator 
function bookedOrders(username,item,price,paymentMethod){
    if(paymentMethod === "COD"){
        return console.log(`Order of ${item} is placed for ${username} that costs ${price} and the payment type is ${paymentMethod}`);
    }
    else
        return console.log(`Order of ${item} is placed for ${username} that costs ${price} and the payment is done by ${paymentMethod}`)
}
const resultt = bookedOrders("Ankit","Kadahi Paneer",499,"COD")
console.log(resultt);



// handle objects in the functions
const obj={
    name : "Paneer Tikka",
    price : 299
}
function handleObject(anyObject){
    if(!anyObject){
        return console.log("NOT FOUND !!!")
    }
    return console.log(`The ${anyObject.name} costs ${anyObject.price}`)
}
console.log(handleObject(obj));


// handle array in the functions
const arr= [1,2,3,4,5];
function addArr(arrayss){
    return arrayss[1];
}
console.log(addArr(arr));