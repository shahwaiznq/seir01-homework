// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function (a, b) {
  if (a > b) {
    return(a) //pythonic way or doing it, this ok in JS?
  }else{
    return(b)
  };
};

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (x, y, z) {
  let i = x;
  if (y > x) {
    i = y;
  }
  if (z > i){  //order of operation, if y is bigger than x, i will be updated
    i = z;
  }
  return(i)
};

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowelCheck = function (char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return(console.log(true))
      };
    };
  return false
};

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

list = [1,2,3,4]

const sumArray = function (a) {
  let x = 0;
  for (let i = 0; i < a.length; i++) {
    x += a[i]
  };
  return x
};

console.log(sumArray(list));

const multiplyArray = function (a) {
  let x = 1;
  for (let i = 0; i < a.length; i++) {
    x *= a[i]
  };
  return x
};

console.log(multiplyArray(list));

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".


const reverseString = function (string) {
  let rev = '';
  for(let i = string.length - 1; i >= 0 ; i--) {
    rev += string[i]
  };
  return(rev)
};

//Below also works but felt like cheating.
// function reverseString(string) {
//     return string.split("").reverse().join("");
// };
//


// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

/* for string input */
const findLongestWordString = function (words) {
  each = words.split(' ')
  let x = 0;
  let y = '';
  for (let i = 0; i < each.length; i++) {
    if (each[i].length > x) {
      x = each[i].length;
      y = each[i];
    };
  };
  return(`${y} is the longest word with ${x} characters.`)
};

/* for array input */
const findLongestWord = function (words) {
  let x = 0;
  let y = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > x) {
      x = words[i].length;
      y = words[i];
    };
  };
  return(`${y} is the longest word with ${x} characters.`)
};

// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = function (words, num) {
  let y = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === num) {
      y.push(words[i]);
    };
  };
  return(`The words with ${num} letters are ${y.join(', ')}.`)
};
