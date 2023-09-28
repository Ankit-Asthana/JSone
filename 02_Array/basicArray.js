const myArr =[1,2,3,4,5];
console.log(myArr);
myArr.push(6)
console.log(" Value of array after push method ",myArr);
myArr.pop()
console.log(" Value of array after pop method ",myArr);


console.log(myArr.includes(5));
console.log(myArr.indexOf(5));


const toStringg = myArr.join();
console.log(toStringg);
console.log(typeof toStringg);


const myArr2= myArr.slice(1,3); //here the 1 is included but 3 is excluded , will show the array of index from 1 to 2
console.log("Slice fn() ", myArr2);
console.log("Array after slice ",myArr);

const myArr3 = myArr.splice(1,3); // here 1 and 3 are included. But if we check here , the splice function has manipulated the original array and make that only with the index given.
console.log("Splice fn()" ,myArr3);
console.log("Array after splice ",myArr); // the array got manipulated here