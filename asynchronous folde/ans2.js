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
  console.log('1');
  setTimeout(function(){
    console.log("egg is ready");
    console.log("2"); // This will execute after "egg is ready"
  }, 3000);
}

fryEggs();


makeCoffee();
fryEggs();

setTimeout(function(){
  console.log("Breakfast is  ready!");
},4000)
