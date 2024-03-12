// No 1.” for in “is used for replicating or replay or repeat  over an object keys
// While
// “For of” work on  values  like arrays, strings, maps. On like “for in”

// 2.function is a block of code that is built to perform a particular task.
// While
// Method can be said to be a property of an object it can be use to access and edit an object properties

// 3.by calling delete then the object name dot the name of the key you want to delete.


//4 . To find the number of keys a JavaScript object has, we can use the Object.keys() method. This method returns an array containing the keys of the object, 
// and then we can then get the length of this array by using .length method to determine the number of keys.

// 7. The spread operator "(...)" is used  commonly to make copies of arrays, merge arrays, or 
//  pass elements of an array as arguments to a function.
const newArray = [...array];
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); 

//why the rest operator works with object and,
// allows a function to accept an indefinite number of arguments as an array 
// it is also used to gathering elements into an array and can be used to add mulipy number together.

function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
  
  const result =console.log (sum(1, 2, 3, 4)); 





// 8.JSON cannot contain functions why JavaScript objects can contain functions. 
// JSON can be created and used by other programming languages why JavaScript objects can only be used in JavaScript.


// 9.similarities
// both the class and objects are reusable
// they both  have methods and property
//  they both are just or acts as a bluepint or template for creating object

//    Difference
//Class is a logical entity.
//clss is group of similar objects
//class can only be declared once
//    while
//Object is a physical entity
// Object is real wold entity such as car or book
// object can be created many times as per requirement

//10. Object.keys() is like looking at all the labels on the items in the object. It gives you a list of all the labels.
  //  while
  // Object.values() is like looking at all the items in the object.  It gives you a list of all the things inside the items.


//  explain destructuring with examples
//6. Destructuring is a way to extract values or properties from data stored in objects or arrays.


// Array destructuring
const numbers = [1, 2, 3, 4, 5];

const [first, sec, ...rest] = numbers;

console.log(first);  
console.log(sec); 
console.log(rest);  


// Object  destructuring

const person ={
  name : 'Alice',
  age : 50,
  city : 'Aba'
};

const{name,age}=person;

console.log(name);



// changing var name 
const girl ={
  name : 'blessing',
  age : 21,
  city : 'ph'
};
const{name: girlname,}=person;
console.log(girlname);

//5. 
 console.log({x: 10, y: 21, x: -2}) 
// the Result will be {x: -2, y: 21} because of the way JavaScript object properties are handled. When you define an object 
//  duplicate keys, the later assignment wins


