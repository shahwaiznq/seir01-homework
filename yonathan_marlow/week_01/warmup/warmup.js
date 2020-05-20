
const factoringNumbers = function(number){ // creating function
  let factor1 = ``; // blank to define variable
    if (number%3 === 0) {
      factor1 = `pling`;
      return factor1
} else {
  let factor2 = ``
    if (number%5 === 0) {
      factor2 = `plang`;
      return factor2
} else {
  let factor3 = ``
    if (number%7 === 0) {
      factor3 = `plong`;
      return factor3
} else {
  let factor4 = ``
    if ()
      }
    }
  }
}

factoringNumbers(28);


const raindrop = function (num) {
  let output = ``
    if (num % 3 === 0) {
      output = output + `pling`;
    }
    if (num % 5 === 0) {
      output += `plang`;
    }
    if (num % 7 === 0) {
      output += `plong`;
    }

    if (output === ``) {
      return num.toString();
    } else {
      return output;
    }
}
console.log(raindrop(15));
console.log(raindrop(20));
console.log(raindrop(105));
console.log(raindrop(99));
console.log(raindrop(70));
