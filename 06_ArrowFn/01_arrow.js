console.log(this);

function abc(){
    // console.log(this);
}
abc();

const abcd= ()=>{ //here in the arrow function, we don't use function keyword, instead we use `() =>{}`
    const username ="Ankit";
    console.log(this.username);
}
abcd();

const acb = (a , b) => { //here we use the explicit return 
     return (a+b);
}
console.log(acb(2,5));


//in the function if one linne statement is there then no inclusion of return is needed and will be in small bracket (). 
const ad =(a,b) => (a+b); //implicit return
console.log(ad(1,4));

const ads =(a,b) => ({name:"ANkidkjadhsihfia"}); // to return the object, we use {} inside the ()
console.log(ads(1,4))
