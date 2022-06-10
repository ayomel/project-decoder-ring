// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function() {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // setting defaults
    if (!input || !alphabet || alphabet.length !== 26) {
      return false
    }
    //if there are duplicates return false
    if (Array.from(new Set(alphabet)).length !== 26) {
      return false
    }
    // set variables
    let abcs = 'abcdefghijklmnopqrstuvwxyz'
    // split the alpha into an array
    alphabet = alphabet.split('')
    //take the input (word), to be converted to lowercase
    input = input.toLowerCase()
    let subResult = {}
    let decode = {}
    let result = ''
    //goes through the alphabet
    abcs.split('').forEach((letter, index) => {
      subResult[letter] = alphabet[index]
      decode[alphabet[index]] = letter
    })
    //if encode is false, goes through alphabet (opp of decode)
    if (!encode) subResult = decode
    input.split('').forEach((input) => {
      //return space if there is one, otherwise return the input
      result += input === ' ' ? ' ' : subResult[input]
    })
    //return
    return result
  }

  return {
    substitution,
  }
})()

module.exports = { substitution: substitutionModule.substitution }
