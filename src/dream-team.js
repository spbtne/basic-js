const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
if (!Array.isArray(members)) {return false;}
  let result = members.reduce((acc, item, array) => {
    if(typeof item === 'string')
    {
      item = item.replace(/\s+/g, ' ').trim();
     acc += item[0]}
     
     return acc; 
   }, ''
   )
   let sortResult=result.toUpperCase().split('').sort().join('');
  return sortResult;
   
};
