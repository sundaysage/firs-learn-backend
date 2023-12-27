function sumAll(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

// Example usage:
const result = sumAll(1, 2, 3, 4, 5); // You can pass any number of integers
console.log(`The sum of all integers is: ${result}`);
