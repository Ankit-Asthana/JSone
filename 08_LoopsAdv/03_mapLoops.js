console.log("Jai Shree Ram");
// Since we can't store the values of the array when using the for each function, so to overcome this
// problem , we use the filter function


//use of the filter function 
const a =[1,2,3,4,5,6,7,8,9,10];
const newa = a.filter((text)=> { //here we store the output of the filter to a const "newa"
    return text>4;
})
console.log(newa);



// to use the for each loop we must have a seperate array to store the value
const b= ["Ankit","Aryan"];
const c =[];
b.forEach((name)=>{
    if(name=="Ankit"){
        c.push(name);
    }
}) 
console.log(c);
