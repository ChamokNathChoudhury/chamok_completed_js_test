exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var regX = /[0-9]/;
    return regX.test(str);
  },

  containsRepeatingLetter : function(str) {
    var regX = /([a-zA-Z])\1+/;
    return regX.test(str);
  },

  endsWithVowel : function(str) {
    var regX = /[aeiou]$/i;
    return regX.test(str);
  },

  captureThreeNumbers : function(str) {
    var regX = /.[0-9]{3}.$/;
    return regX.test(str);
  },

  matchesPattern : function(str) {
    var regX = /^\d{3}-\d{3}-\d{4}$/;
    return regX.test(str);
  },

  isUSD : function(str) {
    var regX = /^$$[0-9]+[.,]*[0-9]$/;
    return regX.test(str);
  }
};
