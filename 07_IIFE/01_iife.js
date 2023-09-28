// Immediately Invoked Function Expression (IIFE) 
// The function that calls immediately after building
// The IIFE function is basically used for protecting the fn() from global pollution code


// named iife
(function abc(){
    return console.log("IIFE function");
})();   //here the function is wrapped in small bracket and after the function, a small bracket to invile the function.

// ()()


// un-named iife
(()=>{
    console.log("Arrow function IIFE");
})();


// iife with argument
((name)=>{
    console.log(`Arrow function IIFE of ${name}`);
})("Ankit");