exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    var index = arr.indexOf(item);
    while (index > -1) {
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    var index = arr.indexOf(item);
    while (index > -1) {
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index,0, item);
    return arr;
  },

  count : function(arr, item) {
    var counts = {};
    for(var i = 0; i < arr.length; i++) {
      var num = arr[i];
      counts[num] = counts[num] ? counts[num]+1 : 1;
    }
    return counts[item] || 0;
  },

  duplicates : function(arr) {
    var sorted = arr.sort(), duplicates = [];
    for (var i = 0; i < sorted.length - 1; i++) {
      if (sorted[i + 1] == sorted[i] && duplicates.indexOf(sorted[i]) == -1) {
        duplicates.push(sorted[i]);
      }
    }
    return duplicates;
  },

  square : function(arr) {
    for(var i =0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var i = -1, occ = [];
    while ((i = arr.indexOf(target, i+1)) != -1){
      occ.push(i);
    }
    return occ;
  }
};
