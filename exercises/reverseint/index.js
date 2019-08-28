// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const chars = String(n)
  // turn int into string
  const reversedChars = chars.split("").reduce((accumulator, element) => {
    return element + accumulator
  }, "")
  // split string into an array, use reduce to reverse this array
  // start with initial empty string and then add first value of the array to the
  // accumulator. Assign the reversed string which is returned to reversedChars

  return parseInt(reversedChars) * Math.sign(n)
  // turn reversedChars from integer to string
  // use Math.sign(n) to maintain the original mathematical sign (e.g. negative)
}

module.exports = reverseInt
