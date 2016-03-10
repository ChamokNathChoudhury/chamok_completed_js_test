exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var sum = 0;
    var clock;
    for(var i = start; i < end; i++) {
      sum += i;
    }
    return sum;
  }
};
