console.log("CONNECTED");


const students = ['Gabby', 'Nathan', 'Marcel', 'Jim'];

// ACCESSING ITEMS IN ARRAY

console.log(students[students.length-1]); // gives you last item 

// REASSIGNING AN ELEMENT IN ARRAY

students[1] = 'Jackie';
console.log(students);

// USING ARRAYS WITH FUNCTIONS 

const valuePrinter = (array, index) => {
  return array[index]; 
}

console.log(valuePrinter([1, 2, 3, 4, 5, 6 ], 4)); //logs value at 4th index

//WRITE A FUNCTION WHICH TELLS YOU IF 'GREG' IS IN THAT ARRAY

const includesValue = (array, value) => {
   return array.includes(value); 
}
//includes method already return true/false, no need for if statement

console.log(includesValue(students, 'Greg')); // returns false 
