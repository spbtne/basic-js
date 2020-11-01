const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  throw new CustomError('Not implemented');

  if (!Array.isArray(arr)) {
    throw new Error('Not array!');
  }
  let result = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === '--double-next' && i + 1 < arr.length) {
      result.push(arr[i + 1]);
    } else if (arr[i] === '--discard-next' && i + 1 < arr.length) {
      i += 2;
    } else if (arr[i] === '--double-prev' && i - 1 >= 0) {
      result.push(arr[i - 1]);
    } else if (arr[i] === '--discard-prev' && i - 1 >= 0) {
      result.pop();
    } else {
      result.push(arr[i]);
    }
  }
  return result.filter(x => x !== '--discard-next' &&
    x !== '--discard-prev' && x !== '--double-next' &&
    x !== '--double-prev');
};