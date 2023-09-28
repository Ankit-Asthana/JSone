console.log("Jai Shree Ram");
//singleton  //when objects are declared by constructor , it will make one instance called singleton
// Object.create();


// when objects are declared by the literals than more than one instance will get created
// the difference between array and objects are that, we can store in key value pair in the objects.

const aSyn = Symbol("Key1");
const myObj = {
    name : "Ankit", //all the keys are treated as string i.e name,age,location,email
    age: 23,
    location :"Noida",
    email : "ankit@gmail.com",
    [aSyn] : "This is the key"
};  
console.log(myObj);
console.log(myObj["email"]); //better way to access
console.log(myObj[aSyn]); //way to access the symbol


myObj.age = 21;
console.log(myObj["age"]);  //to change the value of the variable
// Object.freeze(myObj); // now we can't modify the variables in the object
// myObj.age=25;
// console.log(myObj["age"]); //still it will give the age as 21


myObj.greeting = function(){
    console.log("Function of Greeting");
}
myObj.greeting2 = function(){
    console.log(`Hello user, ${this.name}`);
}
console.log(myObj.greeting());
console.log(myObj.greeting2());