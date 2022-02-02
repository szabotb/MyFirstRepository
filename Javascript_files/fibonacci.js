//Function that returns fibonacci sequel with a given number of elements

function fibonacci(numbers) {
  let next;
  let num1 = 0;
  let num2 = 1;
  let result = [];
  for (let i = num2; i < numbers; i++) {
    next = num1 + num2;
    num1 = num2;
    num2 = next;
    result.push(num1);
  }
  result.unshift(0);
  return result;
}
console.log(fibonacci(8));