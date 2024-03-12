// syncronous function
function printNumberSyncronous() {
  console.log(1);
  console.log(2);
  console.log(3);
}

console.log("syncronous running");
printNumberSyncronous();

// asyncronous
function delay(seconds) {
  return new Promise((resolve, reject) => {
    // javascripts calculates time in milleseconds so multiply the seconds by 1000 to convert to milliseconds
    setTimeout(() => resolve("delay completed"), seconds * 1000);
  });
}

async function printNumbersAsyncronously() {
  console.log(1);

  await delay(2); // pause code for 2 seconds

  console.log(2);
  console.log(3);
}

console.log("asyncronous running");
printNumbersAsyncronously();

function buy() {
  alert('u just bought some thing')

  let cl =4+ 7;
  console.log(cl);

  
}

buy()