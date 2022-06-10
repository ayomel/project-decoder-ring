// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function() {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    /* If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.*/
    if (!shift || shift > 25 || shift < -25) {
      return false
    }
    //if decode is not true, then multiply by neg 1 (shift)
    if (!encode) {
      shift *= -1
    }
    //no capital letters, turn into array, and getting the letter
    return input
      .toLowerCase()
      .split('')
      .map((letter) => {
        //get character code at a specific letter
        if (letter.charCodeAt(0) < 97) {
          return letter
        }
        //letter with the charactor code & change into integer
        let charNum = letter.charCodeAt(0) + parseInt(shift)
        if (charNum > 122) {
          charNum = 96 + (charNum - 122) // loop around
        } else if (charNum < 97) {
          charNum += 26
        }
        //getting character code and passing the number, returning as a string into the array
        return String.fromCharCode(charNum)
      })
      .join('')
  }

  return {
    caesar,
  }
})()

module.exports = { caesar: caesarModule.caesar }
