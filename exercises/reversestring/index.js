// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "")
//   // Split string into array
//   // Use reduce method: use callback function and initial value of
//   // an empty string. 'rev' is the accumulator, the collection of the
//   // iterations, 'char' is the individual element currently being
//   // iterated on. This array method is to reduce an array down, in
//   // this case, we are reducing it into a string, with the characters
//   // reversed. For each char, char is added to rev value- which begins
//   // as an empty string. The new char is concatenated to the beginning
//   // of the string, which means that once all the chars have been
//   // iterated over, the value of rev will be the reversed string.
// }

// function reverse(str) {
//   let reversed = ""

//   for (let character of str) {
//     reversed = character + reversed
//   }

//   return reversed
// }

// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("")
// }

function reverse(str) {
  if (str === "") return ""
  return reverse(str.substring(1)) + str[0]
}

module.exports = reverse
