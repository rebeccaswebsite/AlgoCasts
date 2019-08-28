// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   return (
//     str ===
//     str
//       .split("")
//       .reverse()
//       .join("")
//   )
// }

// function palindrome(str) {
//   let reversed = ""

//   for (let element of str) {
//     reversed = element + reversed
//   }

//   return str === reversed
// }

// function palindrome(str) {
//   const reversed = str.split("").reduce((accumulator, element) => {
//     return element + accumulator
//   }, "")

//   return str === reversed
// }

function palindrome(str) {
  return str.split("").every((char, i) => char === str[str.length - i - 1])
  // The every method goes through all elements of an array and returns true
  // if the condition in the anon function is met for each element (& false
  // if not)

  // Here the condition is that each character must be the same as it's
  // mirror image character, i.e. the character the same number of positions
  // away from the end as it, but in the other direction.

  // This mirror character can be picked out by finding the element
  // in the original string with the correct index. The index can be found by
  // finding the length of the original string, then subtracting the index of
  // the other character and adding one. E.g. if we are comparing char at index
  // 0 with the string 'hello' this is how we would find the index of the mirror
  // char: the string length is 5 so minus the original index from this, i.e. 1,
  // then minus one again (this needs to be done as array index starts at 0)

  // Now you have the index of the mirror letter it can easily be found and
  // compared with its corresponding letter

  // Note: this is a less preferable solution because it has double comparison,
  // it compares the first to the last and the last to the first etc.
  // so it is doing twice as much as it needs to do
}

module.exports = palindrome
