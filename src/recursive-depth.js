const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.counter = 1;
    this.level = 1;
    this.defArr = 0;
  }

  calculateDepth(arr) {
    if (this.level === 1 && this.counter ===1){ 
      this.defArr = arr;}
    if (this.defArr.join() !== arr.join() && this.counter ===1) {
      this.level = 1;}
    for (let i = 0; i < arr.length; i += 1) {
      if (Array.isArray(arr[i])) {
        this.counter += 1;
        this.calculateDepth(arr[i]);
        if (this.counter > this.level) {
          this.level = this.counter;
          this.counter = 1;
        } else {
          this.counter = 1;
        }
      }
      
    }
    return this.level
  }
};
