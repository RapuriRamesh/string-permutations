// Problem -
// Given two strings,
// Write a method to decide if one is a permutation of the other.

const arePermutations = (str1, str2) => {
  // Step 1: Check if lengths are equal
  if (str1.length !== str2.length) {
    return false;
  }

  // Step 2: Sort both strings and compare
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
};

// Test Cases -
console.log(arePermutations("abc", "bca")); // true
console.log(arePermutations("abc", "abcd")); // false
console.log(arePermutations("abc", "cbaa")); // false
console.log(arePermutations("123", "312")); // true
console.log(arePermutations("god", "dog")); // true
