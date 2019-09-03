// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(arr, size) {
  const chunked = []
  // create empty array to hold 'chunked' version of our data
  let index = 0
  // create index with value of 0, it is a variable we want to
  // allow to change over time so we use let

  while (index < arr.length) {
    // while index is less than the length of the original array
    chunked.push(arr.slice(index, index + size))
    // push the sliced array ('chunk') into the empty chunked array
    index += size
    // add size to index variable, to take scoops through the original
    // array with each iteration
  }

  return chunked
  // return the chunked array
}

// function chunk(arr, size) {
//   const chunked = []
//   // create empty array to hold 'chunked' version of our data

//   for (let el of arr) {
//     // for each element in the 'unchunked' array
//     const last = chunked[chunked.length - 1]
//     // retreive the last element in 'chunked'
//     if (!last || last.length === size) {
//       // if that element does not exist, or if length is equal to chunk size
//       chunked.push([el])
//       // push a new chunk (an array) with the current element into chunked
//     } else {
//       last.push(el)
//       // otherwise, add the current element into the chunk
//     }
//   }

//   return chunked
// }

module.exports = chunk
