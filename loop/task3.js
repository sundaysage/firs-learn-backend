// Differentiate array.filter and array.find



// Array.filter :

// array.filter looks at the entire list and picking out only the items that match what you want.
// example
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);


// Array.find
// array.find is a method that looks for one item in an array that matches your criteria. It stops as soon as it finds something that match
//example
const fruits = ['apple', 'banana', 'orange', 'kiwi'];
const foundFruit = fruits.find(fruit => fruit === 'orange');
// Output: 'orange'



