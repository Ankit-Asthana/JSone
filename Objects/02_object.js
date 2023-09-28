const obj= {};
obj.namee="Ankit";
obj.id=1;
obj.salary=100000;
// console.log(obj);


//for object inside object.
const obj2 = {
    name : {
        firstname: "Ankit",
        lastname: "Suman"
    },
    address :{
        permanentAddress :{
            city: "Motihari",
            pin: 845401
        },
        residingAddress :{
            city : "Kolkata",
            pin : 7984743
        }
    },
    phoneno : 7058374882
}
// console.log(obj2);
// console.log(obj2.address.permanentAddress);


//to concatinate both the objects

obj3 = {...obj,...obj2}; //use at 90% chance
// console.log(obj3);

obj4= Object.assign({},obj,obj2); //other method to do that
// console.log(obj4);

console.log(Object.keys(obj));  // to get the keys of the objects
console.log(Object.values(obj)); // to get the values of the objects
console.log(Object.entries(obj)); // to get the key value of the object
console.log(obj.hasOwnProperty('namee')); // to get that the object have the key in it or not
console.log(obj.hasOwnProperty('firatname'));