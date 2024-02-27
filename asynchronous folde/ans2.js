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
    console.log('coffee is ready')
  },1000); 
}

console.log("we have started frying the egg");

function fryEggs() {
  setTimeout(function(){
    console.log("egg is ready");

  },3000

  )
}

makeCoffee();
fryEggs();

setTimeout(function(){
  console.log("Breakfast is  ready!");
},4000)
