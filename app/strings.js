exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    /*var len = 0;
    var lastIndex = 0;
    while(len < str.length -1) {
      if(str[len+1] == str[lastIndex]) {
        lastIndex = len + 1;
        if (lastIndex > amount -1) {
          str.replace();
        }
      } else {
        lastIndex = lastIndex + 2;
      }
      len++;
    }
    console.info(str);
    return str;*/
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
    var splits = str.split('');
    splits.reverse();
    return splits.join('');
  }
};
