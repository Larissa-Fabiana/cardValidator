module.exports.cardValidator = cardValidator;
function cardValidator(input){
  let str = confirmValidInput(input);
  let array = toArrayOfNumbers(str);
  let arraySecondPositions = newArrayOfPositions(1, array);
  let arrayFirstPositions = newArrayOfPositions(0, array);
  let arrayDouble = doubleNumbers(arraySecondPositions);
  let total = sum(arrayFirstPositions) + sum(arrayDouble);
  let result = returnTrueOrFalse(total);
  return result;
}
function confirmValidInput(val){
  let valString = val.toString();
  if(typeof val === 'string'){
    throw new Error('Insira apenas numeros');
  }else if( valString === '' || valString.length < 14 || valString.length > 16){
    throw new Error('Insira um numero entre 14 e 16 digitos');
  }else if( valString.indexOf('.') !== -1){
    throw new Error('Insira numeros sem caracteres');
  }else{
    return valString;
  }
}
function toArrayOfNumbers(strOfNum){
  let arr =[];
  for(let caracter in strOfNum){
    arr.push(parseInt(strOfNum[caracter]));
  }
  arr.reverse(); 
  return arr;
}
function newArrayOfPositions (position, arr){
  let arrayPositions = [];
  while(position < arr.length){
    arrayPositions.push(arr[position]);
    position+=2;
  }
  return arrayPositions;
}
function doubleNumbers(arr){
  let arrayDouble = [];
  for(let a in arr){
    let double = arr[a]*2;
    if (double > 9){
      arrayDouble.push(double - 9);
    }else{
      arrayDouble.push(double);
    }
  }
  return arrayDouble;
}
function sum(arr){
  return arr.reduce( ( total, num ) => {return total + num;}, 0 );
}
function returnTrueOrFalse(sum){
  if(sum % 10 === 0){
    return true;
  }else{
    return false;
  }
}
