function createSumFunction() {
  let sum = 0;

  return function(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      return "Incorrect input value!";
    }

    sum += num;
    return sum;
  };
}

const calculateSum = createSumFunction();

console.log(calculateSum(3)); // 3
console.log(calculateSum(5)); // 8
console.log(calculateSum(20)); // 28
console.log(calculateSum(-5)); // 23
console.log(calculateSum(0)); // 23
console.log(calculateSum('test')); // Incorrect input value!
console.log(calculateSum(5)); // 23
