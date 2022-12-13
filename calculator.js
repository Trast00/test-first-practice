class Calculator {
  add = (x=0, y=0) => x+y;
  subtract = (x=0, y=0) => x-y;
  multiply = (x=0, y=0) => {
    if(x*y === -0) return 0;
    else return x*y;
  };
  divide = (x=0, y=1) => {
    if(y===0){
      throw new Error ("Cannot be divided by 0")
    }
    else return (x/y);
  }
}

module.exports = Calculator;