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


//                LOOPS! 

for (let i = 0; i <= 15; i++ ) { 
  console.log(i);
}

// ARRAYS WITH LOOPS 

const instructors = ['Dr. T', 'Aja', 'Trinity', 'Discussion tickets'];

for (let i = 0; i < instructors.length; i++) {
  console.log(instructors[i]);
}

// ARRAYS, LOOPS, FUNCTIONS 

const colors = ['blue', 'purple', 'red', 'green', 'orange'];

const colorLoop = () => {
  let domString = ''; 
  for (let i = 0; i < colors.length; i++) {
    domString += `<h1>${colors[i]}</h1>`;
  }

  console.log(domString); // will run AFTER for loop is done
}

colorLoop();

const e14instructors = [
{first: 'Trinity', last: 'Christiana'}, 
{first: 'Aja', last: 'Washington'}, 
{first: 'Teresa', last: 'Vasquez'}
];

const nameLoop = () => {
  let domString = ''; 

  for (let i = 0; i < e14instructors.length; i++) {
    domString += `<h1>${e14instructors[i].first} ${e14instructors[i].last}</h1>`;
  }

  console.log(domString);

}

nameLoop();

// ARRAY METHODS 

const array1 = ['cat', 'dog', 'horse', 'cow'];

const string1 = array1.join(' '); 
// . join method turn an array into a string. (' ') will put a space 
// in between each element. If it's empty, it will put commas

const stringToArray = string1.split(' ');
// turns string into array 
// (' ') tells it where to split strings individually 
// has to match what to used to join! 

//   PUSH AND POP 

array1.pop(); // removes last element
array1.push('cat'); //adds at the end 

// UNSHIFT AND SHIFT

array1.shift(); //REMOVES from beginning 
array1.unshift(); //ADDS in beginning
