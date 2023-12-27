function sumAll(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

const result = sumAll(1, 2, 3, 4, 5); 
console.log(`The sum of all integers is: ${result}`);
