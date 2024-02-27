// Synchronous Example 

console.log("Start making breakfast");

function makeCoffee() {
  console.log("Making coffee");
  console.log(" coffee done");
}

function fryEggs() {
  console.log("Frying eggs");
  console.log("Frying eggs done");
}

makeCoffee();
fryEggs();

console.log("Breakfast is ready!");
// while

// Asynchronous Example



console.log("Start making breakfast");

function makeCoffee() {
  setTimeout(function() {
    console.log("Making coffee...");
  }, 8000); 
}

function fryEggs() {
  setTimeout(function(){
    console.log("Frying eggs...");

  },3000

  )
}

makeCoffee();
fryEggs();

console.log("Breakfast is almost ready!");
