// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {}
  let max = 0
  let charMax = ""

  for (let char of str) {
    chars[char] ? chars[char]++ : (chars[char] = 1)
  }
  // create object with each character in the string as a
  // key and the number if times it appears as a value

  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char]
      charMax = char
    }
  }
  // iterate through character map, note that for arrays/ strings
  // we can use for/of loop but for objects we need to use a
  // for/in loop
  // for each character, if it's value in the object is bigger than
  // the max variable defined above, assign this value as the new max
  // and define charMax as this character

  return charMax
}

maxChar("heeey")

module.exports = maxChar
