const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
    let counter = 1;
    let sec = 0;
    
    for (let i = 1; i < disksNumber; i +=1)
      {
        counter = counter*2+1;
      }
    
    
    let speedSec = turnsSpeed/3600;
    
    sec = Math.floor(counter/speedSec);
      

return { turns: counter, seconds: sec }
};
