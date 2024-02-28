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
