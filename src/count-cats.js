const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
   
  let result = matrix.reduce(function(counter,item,index, array){
    for (let i = 0; i < item.length; i +=1)
      {
    if(item[i] === '^^') {
      counter +=1;
    } else {counter}
    }
    return counter;
  }, 0);
return result;
  // remove line with error and write your code here
};
