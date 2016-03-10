exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {

  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {
    var number = parseFloat((a*b).toPrecision((b.toString().split('.')[1]).length));
    return number;
  }
};
