function reverseString(str) {
  let reversedStr = ""
  for (let i = 0; i<str.length; i++){
    reversedStr += str[str.length - i -1]
  }
  return reversedStr;
}

module.exports = reverseString;