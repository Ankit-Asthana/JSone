console.log("Jai Shree Ram")
// when we use the for of loop in array it will return the value , but when we use the for in loop in 
// the array, it will return the key of the array  

// for of loop for the array
const arr= [1,2,3,4,5]
console.log("For of loop for array :-");
for(const i of arr){    //for of loop syntax
    console.log(i);
}
console.log("\n");



// for in loop for array
const arr1=["one","two","three","four","five"];
console.log("For in loop for array :-");
for (const i in arr1){
    console.log(i); //it will return the key of the respective values 
}
console.log("\n");




//for of loop for map
const a1=new Map();
a1.set('IN',"INDIA")
a1.set('USA',"United States of America")
console.log("For of loop for map :-")
for(const [key,pair] of a1){
    console.log(`Key is ${key} pair is ${pair}`);
}
console.log("\n");



// for in loop for objects 
const obj ={
    name : "Ankit",
    class : "MCA",
    university : "GEU"
};
console.log("For in loop for objects :-      ");

for(const key in obj){
    console.log(`The value of key "${key}" in the object is ${obj[key]}`);
}