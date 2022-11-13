// проверка на наличие свойства объекта и вывод его значения

function checkObj(obj, checkProp) {
    let result = obj.hasOwnProperty(checkProp);
    if(result){
      return obj[checkProp];
    }
      return "Not Found";
  }