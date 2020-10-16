const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let mainText ='';
  if (str === null) { 
   mainText = 'null';
 } else {
 mainText = str.toString();
}
  let result = mainText;

  if (options.separator === undefined) {
     Object.defineProperty(options, 'separator',{ 
    value: '+'
  })
}

 if (options.additionSeparator === undefined) {
  Object.defineProperty(options, 'additionSeparator',{ 
    value: '|'
  })
}

  if (options === undefined) { 
    return result;
  }// Если задана только строка


 if (options.addition === undefined) {
  for (let i = 1; i <= options.repeatTimes - 1; i += 1) {
    result = result + options.separator + mainText;
  }
  return result;   
}//Задана строка и количество её повторений 

if (options.repeatTimes === undefined) {
  result = result + options.addition;
  for (let i = 1; i < options.additionRepeatTimes; i += 1) {
    result = result + options.additionSeparator + options.addition;
  }
  return result;
  }//Не задано количество повторений для основного текста

if (options.additionRepeatTimes === undefined) {
  for (let i = 1; i <= options.repeatTimes - 1; i += 1) {
      result = result + options.additionSeparator + options.addition + options.separator + mainText;
  }
  return result; //Не задано количество повторений для дополнения
}

for (let i = 1; i < options.repeatTimes; i += 1) {
  result = result + options.addition;
  for (let y = 1; y < options.additionRepeatTimes; y +=1) {
    result = result + options.additionSeparator + options.addition;
  }
   result = result + options.separator + mainText
}
result = result + options.addition;
for (let y = 1; y < options.additionRepeatTimes; y +=1 ) {
  result = result + options.additionSeparator + options.addition;
  }
return result; //заданы все параметры


};
  