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
  // this is a less preferable solution because it has double comparison,
  // it compares the first to the last and the last to the first etc.
  // so it is doing twice as much as it needs to do
}

module.exports = palindrome
