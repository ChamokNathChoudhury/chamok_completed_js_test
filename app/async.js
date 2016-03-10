exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {

  },

  manipulateRemoteData : function(url) {
    var promise = new  Promise(url);
    console.log('promise');
    return promise;
  }
};
