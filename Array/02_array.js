const marvel =["thor","ironman","captain america"];
const dc = ["superman","batman","flash"];
// marvel.push(dc);
// console.log(marvel); //it will push the whole dc array to the existing marvel array


// const allHeros = marvel.concat(dc); //it will make the array concatinate to other array with proper indexing and will store in the different array
// console.log(allHeros); 


const allHero = [...marvel, ...dc]; //it will spread the every element of the array and make a seperate array of that
console.log(allHero);


const an_Array = [1,3,[4,5,6],7,8,[9,[10,11]]];
const originalArray = an_Array.flat(4);
console.log(originalArray);


console.log(Array.isArray("Ankit")); //to check that the input is array
console.log(Array.from("Ankit")); //to convert any datatype to array



let one=100;
let two=200;
let three=300;
console.log(Array.of(one,two,three)); //also make an array of the given parameters