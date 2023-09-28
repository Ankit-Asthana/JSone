console.log("Jai Shree Ram");

let a =100;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("Inside if block", a);
}
// console.log(a);
// console.log(b);
console.log(a);



function add(){
    const a=50;

    function sum(){
        const b=60;
        console.log(a+b); //the inside function can access the outer function member variable called closure property
    }
    // console.log(b);  //the scope variable can't be accessed outside of the block
    sum();
}
add();




abc();
function abc(){
    console.log("Normal Function");
}


// deff();  //here the function is stored in the variable so it will give an error when accessing the function.
const ab= function deff(){
    console.log("Function stored in variable");
}