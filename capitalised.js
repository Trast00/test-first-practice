function capitalised(str) {
  if(typeof str !== 'string') throw new Error ('The value is not a string');
  else if(str.length === 0) throw new Error ('The value is empty')

  let newStr = str[0].toUpperCase() + str.split(1, str.length)
  return str[0].toUpperCase() + str.slice(1, str.length)
}

module.exports = capitalised;