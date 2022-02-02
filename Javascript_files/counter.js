//A function that counts "+"-s and "#"-s in a string and returns the numbers like: 
//hashPlusCount("#+++#+#+#+#++#") ➞ [6, 8]

function hashPlusCounter(str) {
    let result = str.split("");
    let hash = [];
    let plus = [];
    let finalResult = [];
    for (let i = 0; i < result.length; i++) {
      if (result[i] === "#") {
        hash.push(result[i]);
      } else if (result[i] === "+") {
        plus.push(result[i]);
      }
    }
    finalResult[0] = hash.length;
    finalResult[1] = plus.length;
    return finalResult;
  }
  console.log(hashPlusCounter("dsjdksjdaskld+++ldlskdéasklé+dkasasd+skléd#jhsdhsdjs##kjhdksjdskj"));