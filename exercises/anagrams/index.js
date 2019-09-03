// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function charsOnly(str) {
  return str.replace(/[^\w]/g, "").toLowerCase()
}
// helper function to remove any non a-z chars from
// strings and make string lowercase

// function charMap(str) {
//   const charsMap = {}

//   for (let char of charsOnly(str)) {
//     charsMap[char] ? charsMap[char]++ : (charsMap[char] = 1)
//   }

//   return charsMap
// }
// // helper function to create a character map for a string,
// // to keep count of how many of each character there are

// function anagrams(stringA, stringB) {
//   const charMapA = charMap(stringA)
//   const charMapB = charMap(stringB)

//   for (let char in charMapA) {
//     return (
//       Object.keys(charMapA).length === Object.keys(charMapB).length &&
//       charMapA[char] === charMapB[char]
//     )
//   }
// }

// ALTERNATE SOlUTION
function anagrams(stringA, stringB) {
  const newStringA = charsOnly(stringA)
  const newStringB = charsOnly(stringB)

  return (
    newStringA
      .split("")
      .sort()
      .join() ===
    newStringB
      .split("")
      .sort()
      .join()
  )
}

module.exports = anagrams
