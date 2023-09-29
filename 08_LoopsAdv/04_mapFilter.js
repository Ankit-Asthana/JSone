console.log("Jai Shree Ram");


const nums = [1,2,3,4,5,6];
const newNums= nums.map((num) => num+10);
console.log(newNums);




// the map function is used with chaining, in which a lot of map and filter functions are there , first 
// the first map is executed then the output of the map will go as a input to the inner map or filter.
const arr= [1,2,3.4,5,6,7,8,9,10];
const newArr= arr.map((num) => num+10)
                    .map((num) => num *10)
                    .map((num) => num +1)
                    .filter((num) => num>30)
console.log(newArr);