// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function() {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let alpha = {
      a: '11',
      b: '21',
      c: '31',
      d: '41',
      e: '51',
      f: '12',
      g: '22',
      h: '32',
      i: '42',
      j: '42',
      k: '52',
      l: '13',
      m: '23',
      n: '33',
      o: '43',
      p: '53',
      q: '14',
      r: '24',
      s: '34',
      t: '44',
      u: '54',
      v: '15',
      w: '25',
      x: '35',
      y: '45',
      z: '55',
      [' ']: ' ',
    }
    let decoded = {
      11: 'a',
      12: 'f',
      13: 'l',
      14: 'q',
      15: 'v',
      21: 'b',
      22: 'g',
      23: 'm',
      24: 'r',
      25: 'w',
      31: 'c',
      32: 'h',
      33: 'n',
      34: 's',
      35: 'x',
      41: 'd',
      42: '(i/j)',
      43: 'o',
      44: 't',
      45: 'y',
      51: 'e',
      52: 'k',
      53: 'p',
      54: 'u',
      55: 'z',
      [' ']: ' ',
    }
    /*encode and decode */
    if (encode) {
      //splitting the input and loop over it to get individual letters
      return input
        .split('')
        .map((Letter) => {
          //access the object(alpha), retreive the letter in the object in lowercase & join
          return alpha[Letter.toLowerCase()]
        })
        .join('')
    } else {
      //any spaces in there are being removed & if the length is not even
      if (input.replace(/\s/g, '').length % 2 !== 0) {
        return false
      }
      /* it has to be 2 numbers between 0-9 (two digit number) or 
        if its a space */
      return input
        .match(/[0-9]{2}|\s/g)
        .map((number) => {
          return decoded[number] // take the number and put it into the decode
        })
        .join('')
    }
  }

  return {
    polybius,
  }
})()

module.exports = { polybius: polybiusModule.polybius }
