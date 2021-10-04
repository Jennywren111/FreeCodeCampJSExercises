// Return the largest of numbers in an array

function largestOfFour(arr) {
  let largestNums = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = -99999;  // hacky!
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] >= largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    largestNums.push(largestNumber);
  }
  return largestNums;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Check if a value is boolean or not

function booWho(bool) {
  if (typeof bool === "boolean") {
    return true;
  }
  else{
    return false;
  }
}

booWho(null);


// Does a string contain all the letters of another string

function mutation(arr) {
  // take each letter of arr[1] and check it doesn't return -1 when checking its indexOf in arr[0].
  let arr1 = arr[0].toLowerCase();
  let arr2 = arr[1].toLowerCase();
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      return false; 
    }
  }
  return true;
}
mutation(["Hello", "hey"]);


// Check if a string ends with another string

function confirmEnding(str, target) {
  /*  // Curses. Nice try but nope. Works until the target appears more than once in str!
  if (str.indexOf(target) === (str.length - target.length)) {
    return true;
  }
  else {
    return false;
  }
  */

  if (str.substr(str.length - target.length, target.length) === target) {
    return true;
  }
  else {
    return false;
  }
}

confirmEnding("Bastian", "n");


// Convert to fahrenheit

function convertToF(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  console.log(fahrenheit);
}

convertToF(0); // should return a number
convertToF(-30); // should return a value of -22
convertToF(-10); // should return a value of 14
convertToF(0); // should return a value of 32
convertToF(20); // should return a value of 68
convertToF(30); // should return a value of 86


// Divide an array into groups

function chunkArrayInGroups(arr, size) {
  let newArray = [];
   for (let i = 0; i < arr.length; i = i + size) {
     newArray.push(arr.slice(i, i + size));
   }
   return newArray;
 }
 chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g"], 2);


 // Factorialise numbers

 function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product = product * i;        
  }
  console.log(product);
}

factorialize(5); // should return a number.
factorialize(5); // should return 120.
factorialize(10); // should return 3628800.
factorialize(20); // should return 2432902008176640000.
factorialize(0); // should return 1.


// Find longest word in a sentence

function findLongestWordLength(str) {
  let strArray = str.split(" ");
  let longestWord = 1;
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length >= longestWord) {
      longestWord = strArray[i].length;
    }
  }
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


// Return first element that passes a 'truth test'

function findElement(arr, func) {
  // Need some guidance on what I did wrong when I tried to do this with forEach. Oh hang on, forEach is not 'testing' is it, it returns a new array based on old array.
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      return arr[i];
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);


// Remove falsey items from array

function bouncer(arr) {
  let truthyArray = arr.filter(x => x)
  return truthyArray;
}
bouncer([7, "ate", "", false, 9]);


// Repeat a string

function repeatStringNumTimes(str, num) {
  let repeatedString = "";
  for (let i = 1; i <= num; i++) {
    repeatedString += str;
  }
  console.log(repeatedString);
}

repeatStringNumTimes("*", 3); // should return the string ***.
repeatStringNumTimes("abc", 3); // should return the string abcabcabc.
repeatStringNumTimes("abc", 4); // should return the string abcabcabcabc.
repeatStringNumTimes("abc", 1); // should return the string abc.
repeatStringNumTimes("*", 8); // should return the string ********.
repeatStringNumTimes("abc", -2); // should return an empty string ("").
// The built-in repeat() method should not be used.
repeatStringNumTimes("abc", 0); // should return "".


// Reverse a string

function reverseString(str) {
  let strArray = str.split("");
  let reversedArray = [];
  strArray.forEach(function(item) {
    reversedArray.unshift(item);
  });
  console.log(reversedArray.join(""));
}

reverseString("hello"); // returns olleh


// Sort an array and find the index at which to insert a new item

function getIndexToIns(arr, num) {
  // sort array first - MDN says .sort() but that does weird things - for example 1000, 200, 3, 40, 5. Need a comparison function apparently - that's clever, how on earth does it work?! Presumably it's minusing or plusing the index depending upon whether it returns a positive or negative value?
  // loop round items of the array, compare if they are larger or smaller than num. If smaller or equal, return i. 
  // Thought I needed an 'if num larger than last item in array, return arr.length', but actually can just return that without the 'if' as all other possibilities accounted for already. 
  // Note to self: Try refactoring by inserting new value BEFORE sorting, then using indexOf!!!
  function comparison(value1, value2) {
    return value1 - value2;
  }
  if (arr.length === 0) {
    return 0;
  }
  let sortedArray = arr.sort(comparison);
  for (var i = 0; i <= sortedArray.length; i++) {
    if (num <= sortedArray[i]) {
      return i;
    }
  }
  return arr.length;
}
getIndexToIns([1, 43, 2, 75], 50);


// Insert one array into another at specified index

function frankenSplice(arr1, arr2, n) {
  // split arr2 into two at index 'n'. 
  // store each half in a different var
  // add the first bit, then arr1 then second bit to a new array. 
  // Ooh actually, can we use splice to do this? .splice(startIndex, amountToDelete, thingsToAdd);
  // Hmm, okay so we need to copy arr2 in order to pass the test... My code feels a bit hacked. Need to review. Also, .flat() will not work if there are nested arrays being passed in, would need to specify depth level.
  let spliced = [...arr2];
  spliced.splice(n, 0, arr1);
  return spliced.flat();
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);


// Truncate a string

function truncateString(str, num) {
  // Split string at num (slice? 0, num?) store as variable
  // Return first part of split array plus '...'
  // Will likely need some way to check the string is long enough to be truncated.
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


// Convert a sentence to title case

function titleCase(str) {
  let strArray = str.split(" ");
  let capitalised = [];
  strArray.forEach(function(word) {
    let firstLetter = word[0].toUpperCase(); 
    let restOfWord = word.slice(1).toLowerCase();
    capitalised.push(firstLetter + restOfWord);
  });
  return capitalised.join(" ");
}
titleCase("I'm a little tea pot");

