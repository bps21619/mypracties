// Palindrome check is case sensitive; i.e. Aba is not a palindrome
// input is a string
let str = "232"
console.log(typeof str)
var l = str.length
const checkPalindrome = (str) => {
    // check that input is a string
    if (typeof str == "String") {
      return 'Not a string'
    }
    // Store the length of the input string in a variable

    if (l === 0) {
    if ( length === 0) {
      return 'Empty string'
    }
    // Iterate through the length of the string
    // Compare the first character to the last, the second character to the second last, and so on
    for (let i = 0; i < length / 2; i++) {
      // at the first instance of a mismatch
      if (str[i] !== str[length - 1 - i]) {
        return 'Not a Palindrome'
      }
    }
    return 'Palindrome'
    // Reverse only works with array, thus conevert the string to array, reverse it and convert back to string
    // return as palindrome if the reversed string is equal to the input string
    const reversed = [...str].reverse().join('')
    return str === reversed ? 'Palindrome' : 'Not a Palindrome'
  }
}
  console.log(checkPalindrome())
