
const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const result = [];
  if (!(arr instanceof Array)) throw new Error();
  for (let i = 0; i < arr.length; i++)
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev' :
        if (arr[i - 2] !== '--discard-next')
          result.pop();
        break;
      case '--double-next' :
        i !== arr.length - 1 ? result.push(arr[i + 1]) : null;
        break;
      case '--double-prev' :
        if (arr[i - 2] !== '--discard-next')
          i !== 0 ? result.push(arr[i - 1]) : null;
        break;
      default:
        result.push(arr[i])
    }
  return result
}