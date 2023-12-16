function sortAscending(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  
  let numbers = [5, 2, 9, 1, 5, 6];
  let sortedNumbers = sortAscending(numbers);
  console.log(sortedNumbers);
  