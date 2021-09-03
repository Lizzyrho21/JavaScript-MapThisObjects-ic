console.log("sanity");

// Higher-Order Functions
// A function that accepts and/or returns another function is called a higher-order function.

// It’s higher-order because instead of strings, numbers, or booleans, it goes higher to operate on functions. Pretty meta.
// Define an array
const namesArray = ["Lizzy", "Mia", "Jane", "Callie", "Ben"];

// .map() function or method for the array class.
//we call them against our array and pass in a function
// they will handle iterating through the array for me

// forEach
// set anon function outside of foreach. 
// let myCallback = function(el, idx)
// {
//  // code block
//  console.log(`${idx} ${el}`); // calls back index and element!
// }
// //instance of an array
// // called forEach element
// // a function calling back a function.  
// namesArray.forEach(myCallback) // simplifies iterating throught the array

//arrow function syntax
// 1. array 2. forEach 3. inline function 
namesArray.forEach(
(el) => {
console.log(el);
})

//SUMMARY forEach(para1(current element), para2(current index)):
// for this array, for each element, call this function and pass each element into it and ill work on the rest!

// last three will return a new, modified array!
// all three will still go through each element of the array
// and call our function.

// map - map each element to a new array!!
// for each element, we want to RETURN a NEW  value
let myAllCapsArray = namesArray.map(
    (element, index) => {
        return element.toUpperCase(); // return the map element!
    }

);
// print the new array!
// we are mapping the values to new values
console.log(`OG: ${namesArray } `); // Original array
console.log(`${myAllCapsArray } `); // NEW array

//WORKING WITH OBJECTS with .map()

 let ogArray = [{name:"bob", age: 23}, {name:'fred', age:55}, {name:"billy", age:22}]; // objects!

 // we can use filter to filter out the the ages and then map to just get the names

// ==USING THE FILTER AND MAP METHOD TOGETHER==//
//   let filterPeople = ogArray.filter(
//       (el) => {
//           return (el.age >= 55);
//       }
//   ); //filter does NOT chnage the array

//   console.log(filterPeople.map(
//       (el) =>{
//           return (el.name);
//       }
//   ));
//=====END OF FILTER AND MAP ====//

// let justNames = ogArray.map(
//     (el) => {
//         return el.name;
//     }
// );
// console.log(justNames);

// reduce
// does NOT return a new array 
// reduce all the data in the array to ONE result.
// basically like a math operation. you want to return one number from your calculation!

// let salary = [10000, 20000, 40000, 23444, 30000];
// // parameters are different 
// // Array.reduce(total number, current value in iteration) 
// let totalSalaries = salary.reduce(
//     // first parameter is bucket to put total, second one is the next element for iteration 
//     (grandTotal, nextSalary) => {
// // decide how to produce it 
// //return updated total
//         return (grandTotal + nextSalary);
//     }
// );

// console.log( `your total salaries are: ${totalSalaries}`); // console logs the final number!



let salary = [10000, 20000, 40000, 23444, 30000]; //imagine this has 400 elements for filter!
// parameters are different 
// Array.reduce(total number, current value in iteration) 
let totalSalaries = salary.reduce(
    // first parameter is bucket to put total, second one is the next element for iteration 
    (grandTotal, nextSalary) => {
// decide how to produce it 
//return updated total
        // return (grandTotal + nextSalary);
        if(nextSalary > grandTotal)
        {
            return nextSalary;
        }
        else
        {
            return grandTotal;
        }
    }
);

console.log( ` ${totalSalaries}`); // console logs the final number!


// filter(elements, index)
// filter will let is filter the values in our starting array 
// returns a filtered list (filter out elements from my new array).

//pracitce: filter slaries over 20,000
let newFilter = salary.filter(
    (element) =>{
        //check if we want to filter it out or 
        //keep it
        // and return a boolean. true = return, false = filter out
        return (element >= 20000);
    }
);

console.log(`the salaries are ${newFilter}`); // console.log the result!



