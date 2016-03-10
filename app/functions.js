exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ', ' + str2;
    };
  },

  makeClosures : function(arr, fn) {
    return function(){
      fun(arr);
    }
  },

  partial : function(fn, str1, str2) {
    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  useArguments : function() {
    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt : function(fn) {
    fn.call(this, arguments);
  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
