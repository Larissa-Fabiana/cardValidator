const chai = require('chai');
const index = require('../index');
const cardValidator = index.cardValidator;
const expect = chai.expect;

describe('cardValidator()', () =>{
  describe('Errors', () =>{
    it('Should return \'Insira apenas numeros\' to \'\' ', () =>{
      var badFn = function () { cardValidator('') };
      expect(badFn).to.throw('Insira apenas numeros');
    });
    it('Should return \'Insira um numero entre 14 e 16 digitos\' to 1234567890 ', () =>{
      var badFn = function () { cardValidator(1234567890) };
      expect(badFn).to.throw('Insira um numero entre 14 e 16 digitos');
    });
    it('Should return \'Insira um numero entre 14 e 16 digitos\' to 123456789101112131415 ', () =>{
      var badFn = function () { cardValidator(12345678910111213) };
      expect(badFn).to.throw('Insira um numero entre 14 e 16 digitos');
    });
    it('Should return \'Insira um numero entre 14 e 16 digitos\' to 2 ', () =>{
      var badFn = function () { cardValidator(2) };
      expect(badFn).to.throw('Insira um numero entre 14 e 16 digitos');
    });
    it('Should return \'Insira um numero entre 14 e 16 digitos\' to 0 ', () =>{
      var badFn = function () { cardValidator(0) };
      expect(badFn).to.throw('Insira um numero entre 14 e 16 digitos');
    });
    it('Should return \'Insira numeros sem caracteres\' to 1234567890.12344 ', () =>{
      var badFn = function () { cardValidator(1234567890.12344) };
      expect(badFn).to.throw('Insira numeros sem caracteres');
    });
    it('Should return \'Insira apenas numeros\' to abcd ', () =>{
      var badFn = function () { cardValidator('abcd') };
      expect(badFn).to.throw('Insira apenas numeros');
    });
    it('Should return \'Insira apenas numeros\' to 12345abcd678901 ', () =>{
      var badFn = function () { cardValidator('12345abcd678901') };
      expect(badFn).to.throw('Insira apenas numeros');
    });
    it('Should return \'Insira apenas numeros\' to \'123456789012345\' ', () =>{
      var badFn = function () { cardValidator('123456789012345') };
      expect(badFn).to.throw('Insira apenas numeros');
    });
  });
  describe('validation - TRUE', () =>{
    it('Should return true to AMEX: 376411112222331 ', () =>{
      expect(cardValidator(376411112222331)).to.be.true;
    });
    it('Should return true to MASTERCARD: 5555666677778884 ', () =>{
      expect(cardValidator(5555666677778884)).to.be.true;
    });
    it('Should return true to DINERS: 30111122223331 ', () =>{
      expect(cardValidator(30111122223331)).to.be.true;
    });
    it('Should return true to VISA: 4073020000000002 ', () =>{
      expect(cardValidator(4073020000000002)).to.be.true;
    });
  });
  describe('validation - FALSE', () =>{
    it('Should return false to 7654321076543210 ', () =>{
      expect(cardValidator(7654321076543210)).to.be.false;
    });
    it('Should return false to 111111111111111 ', () =>{
      expect(cardValidator(111111111111111)).to.be.false;
    });
    it('Should return false to 507860187000012 ', () =>{
      expect(cardValidator(507860187000012)).to.be.false;
    });  
  });
})