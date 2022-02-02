function fact(num) {
    if (typeof num === "number") {
      if (num <= 0) {
        return "Only positive numbers have a factorial! Please give a positive number";
      } else {
        let result = 1;
        for (let i = 1; i <= num; i++) {
          result *= i;
        }
        return result;
      }
    } else {
      return "Your input is not a number, please give a positive number!";
    }
  }
  console.log(fact(5));