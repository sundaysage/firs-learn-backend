// function factorial(number) {
//     if (number < 0) {
//       return "0";

//     } else {
//       let result = 1;
//       for (let i = 1; i <= number; i++) {
//         result *= i;
//       }
//       return result;
//     }
//   }

//   console.log(factorial(3));



// let i = 0;

// while (i < 201) {
  
//   i++;
//   if (i % 2 !== 0) continue;
//   if (i % 7 == 0 ) break

//   console.log(i);
// }

// for (let i= 1; i < 200 ;i++ ) {

//   if (i % 2 !== 0 ){
//     continue;
//   }


//   if (i %  7 == 0){
//     break;
//   }
//   console.log(i)
// }


//forin is used for iterating over object property and it returns the keys or indexs 

const myObj ={
  a:1,b:2,c:3
}
for (key in myObj){
  console.log(key);
}


// WHILE


// FOR OF is used in going through element of array , string,maps ,sets 
const myArray =[1,2,3,4,5];
 for (number of myArray){
  console.log(number)
 }