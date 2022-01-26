/* We need a function (devidable) that has two parameters (a and b) 
and returns if the first parameter is devidable with the second parameter or not. 
Example: devidable(6,3) -> true ; devidable(5,3) -> false 

function devidable(num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(devidable(10, 3)); */

/*
We need a function (fact) that need a number as a parameter and returns the factorial of that number.
Example: fact(5) -> 120

function fact(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(fact(6)); */

/*6.
We need a function named final that needs an array as a parameter. 
If we do not define the parameter it should return false.
The function has to do the following:
-Checks the elements of the array and sorts numbers and strings longer than 3 letters
-Add 7 to numbers (example: original array element is 3, new element is 10)
-Turn strings to all uppercase
The function has to return an array cleared by the actions above and the elements have to be in opposite order.
Example: ([3, "small", null, true, "puppy", 13, "xy"]) -> [20, 'PUPPY', 'SMALL', 10])*/

function final(array) {
  if (typeof array === "undefined") {
    return false;
  }
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" || (typeof array[i] === "string" && array[i].length > 3)) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
  for (let i = 0; i < newArray.length; i++) {
    if (typeof newArray[i] === "number") {
      newArray[i] = newArray[i] + 7;
    }
  }
  console.log(newArray);
  for (let i = 0; i < newArray.length; i++) {
    if (typeof newArray[i] === "string") {
      newArray[i] = newArray[i].toUpperCase();
    }
  }
  return newArray.reverse();
}
console.log(final([3, "small", null, true, "puppy", 13, "xy"]));