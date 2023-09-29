console.log("Jai Shree Ram")

// fro each loop for array
const arr =["Ankit","Aryan","Omkar","Aman"];
const print = (text) => {
    // console.log(text);
}
arr.forEach(print); //here we are giving reference of the function in the for each loop which is written outside.



// another for each implementation
const arr1 =["Java","JavaScript","Python","Ruby","C++"]
arr1.forEach(function(text){  //here, the function is in the for each loop 
    console.log(text);
})




// for each loop for the array, with objects inside it
const book =[
    {
        bookName: "Bhagwat Geeta",
        price : 0
    },
    {
        bookName: "Rich dad Poor dad",
        price : 500
    },
    {
        bookName: "Doglapan",
        price : 200
    }
]
book.forEach((item)=>{
    console.log(`The book name is ${item.bookName} and the price is ${item.price}`);
})