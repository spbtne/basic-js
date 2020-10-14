const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let numActivity;
  if (typeof sampleActivity === 'string')  { 
    if (sampleActivity.length > 0) {
    let numActivity = Math.ceil(Number(sampleActivity))}
    if (numActivity == undefined ) { return false

    }
  }
else { return false};
let k = 0.693/HALF_LIFE_PERIOD;
let t = Math.log2(MODERN_ACTIVITY/numActivity) / k;
  return t;
};
