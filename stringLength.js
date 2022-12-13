function stringLength(str){
  if(typeof str !== 'string'){
    throw new Error ('The value is not a string');
  }
  else if (str.length < 1) {
    throw new Error ('The value length is below 0');
    
  }
  else if (str.length > 10) {
    throw new Error ('The value length is above 10');
  }
  else return str.length;
}

module.exports = stringLength;