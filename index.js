module.exports.cardValidator = cardValidator;

function cardValidator(input){
  let finalValidation = (confirmValidInput(input)) % 10 === 0 ? true : false;
  return finalValidation;
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
    return toArrayOfNumbers(valString);
  }
}

function toArrayOfNumbers(strOfNum){
  let arr =[];
  for(let caracter in strOfNum){
    arr.push(parseInt(strOfNum[caracter]));
  }
  arr.reverse(); 
  return newArrayOfFirstPositions(arr) + newArrayOfSecondPositions(arr);
}

function newArrayOfFirstPositions (arr){
  let position = 0;
  let arrayPositions = [];
  while(position < arr.length){
    arrayPositions.push(arr[position]);
    position+=2;
  }
  return sum(arrayPositions);
}

function newArrayOfSecondPositions (arr){
  let position = 1;
  let arrayPositions = [];
  while(position < arr.length){
    arrayPositions.push(arr[position]);
    position+=2;
  }
  return doubleNumbers(arrayPositions);
}

function doubleNumbers(arr){
  let arrayDouble = [];
  for(let a in arr){
    const double = arr[a]*2;
    if (double > 9){
      arrayDouble.push(double - 9);
    }else{
      arrayDouble.push(double);
    }
  }
  return sum(arrayDouble);
}

function sum(arr){ 
  return arr.reduce( ( total, num ) => {return total + num;}, 0 );
}

