// Lab 308.3 Part 3
// This is the base data from previos lab

// This is the base data from previos lab

// CSV Data we are working with
// let str =
//   'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors, Assistant,26';

// // Variables created to hold cell data and placeholders
// let placeholder = '';
// let cell1 = '';
// let cell2 = '';
// let cell3 = '';
// let cell4 = '';

// // Loop for each character
// for (char of str) {
//     //Switch case to determin what to do with each char
//   switch (char) {
//     case ',':
//       if (!cell1) {
//         cell1 = placeholder;
//         placeholder = '';
//         break;
//       } else if (!cell2) {
//         cell2 = placeholder;
//         placeholder = '';
//         break;
//       } else {
//         cell3 = placeholder;
//         placeholder = '';
//         break;
//       }
//     case '\n':
//       cell4 = placeholder;
//       placeholder = '';
//       console.log(cell1, cell2, cell3, cell4);
//       cell1 = '';
//       cell2 = '';
//       cell3 = '';
//       cell4 = '';
//       break;
//     default:
//       placeholder += char;
//   }
// }
// //Lab 308.4.1 Starts here
// //Refactor Code above to a different method but same and easier results
// //Part one: 

let string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors, Assistant,26";
let newstring = string.slice(" ");
console.log(newstring);

//Part Two: Expanding Functionality 
// Declare a variable that stores the number of columns in each row of data within the CSV.

// Split the CSV data into rows
// const rows =newstring.split('\n');

// // Extract the header (first row) and split it into columns
// const headerColumns = rows[0].split(',');

// //Instead of hard-coding four columns per row, expand your code to accept any number of columns.
// //This should be calculated dynamically based on the first row of data.

// // Calculate the number of columns dynamically
// const numberOfColumns = headerColumns.length;

// // Output the result
// console.log(`Number of columns: ${numberOfColumns}`);


//store data into two dimentional array
// Function to convert the array to a two-dimensional array
// Create a two-dimensional array
// const resultArray = createTwoDimensionalArray(newstring, rows, headerColumns);

// console.log(resultArray);

let rows = [];
for (let i = 0; i < rows.length; i++){
    rows.push(array[i].split(","));
}

//Part Three:
let newRows = resultArray.slice(1);

// ---------------------------------
  const finalArray = resultArray.map(row => {
    return {
      id: row[0],
      name: row[1],
      occupation: row[2],
      age: row[3]
    };
  });






