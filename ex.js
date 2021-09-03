console.log("sanity");

// 1. Use ```.map``` to take the code from the array below,
//  and place the results in a new array where each value is 5 more than it was in the the original array. 
//  Print the new array.

// ```

// let plus5 = []; // new array to hold result
exercise1  = () => {
let arr = [1, 2, 3, 4]; // set an array o numbers

let plus5 = arr.map(  // set a new variable with takes the array we create and set a '.map()' method.
    (element) =>{ // pass the element in as the paramter to refer to. (all elements in the array!);
        return (element + 5); // reutrn each element plus 5 
    }
);
console.log(`Original array: ${arr}`); // og array
console.log(` New array: ${plus5}`); // new array!!
};
exercise1();

// 2. Use ```.map``` to create a new array of objects where each object has a property for ```index``` and ```value``` based on the elements in the array. 
// Print the new array of objects.

// ```
// let arr = [1, 2, 3, 4];
// let num_objects = []; // new array to hold objects
// ```

// Example Object to Return:
// ```
// {
//   index: 1,
//   value: 2
// }

// ```
exercise2 = () =>{
let arr2 = [1, 2, 3, 4]; // set an array 
let objArray = arr2.map(
    (element, index) =>{
        return ({index, element}); // use the object syntax to return the index property, then the object property.
    }
);
console.log(`original array: ${arr2}` ); //console.log orginal array
console.log(objArray); // new array 
};
exercise2();


// 3. Use ```.reduce``` to return the sum of all the numbers, each multiplied by 2. Print the final sum value.

// ```

// let nums_doubled_sum = []; // new variable assign the final sum
// ```
exercise3  = () => {
let arr3 = [1, 2, 3, 4]; // set an array!

let multiply = arr3.reduce(
    (grandTotal, eachNum) => {
        return grandTotal + eachNum * 2;
    }
);
console.log(multiply);
};
exercise3();



// 4. Use ```.filter``` to return a new array that contains only the even numbers. Print the new array.

// ```
// let arr = [1, 22, 35, 40, 60, 2, 8, 100, 600, 3, 99, 71];
// let even_vals = []; // new array to hold result
// ```

exercise4 = () => {
 let arr = [1, 22, 35, 40, 60, 2, 8, 100, 600, 3, 99, 71]; // create an array 

 let even_vals = arr.filter( 
     (element) => {
        if(element % 2 === 0)
        {
            return element;
        }
       
     }
 );
 console.log(`Even numbers are ${even_vals}`);
};
exercise4();




// 5. Use ```map``` to take an array of names 
// and return a new array that contains instances of objects you instantiated from the class below.

// ```
// class Student{
//         constructor(name){
//                 this.name = name;
//         }
// }
// ```

// Iterate through the array returned using ```forEach``` and print the name property from each object instance in the array.

exercise5 = () => {
// create an array of names!
names = ["Mary", "Janice", "Lily", "Will", "Mallory"];

//create a class

class Student{
        constructor(name){
                this.name = name;
        }
};

let newStudent = names.map(
    (element) => {
        console.log(new Student(element));
        return new Student(element);
       
}

)
.forEach((element) =>{
    console.log(element.name);
    
}
);
};
exercise5();



