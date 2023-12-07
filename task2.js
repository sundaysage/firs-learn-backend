// differentiate Array.map and array.for each

// Array.map
// Array.map creates a new array by applying a provided function to each element in the calling array and it returens a new array
// Eg
const ingredients = ['bread','cheese','tomato','rice'];
const sliedIngredients = ingredients.map(item => `sliced ${item}`);





///array.foreach
// this does not create a new  array or return a new array like array.map 
// it just iterate over the array and apply the given function 
 
const cutingredient =['cutbeans','cutbread','cutrice'];
cutingredient.forEach(item =>  console.log(`add ${item}`))