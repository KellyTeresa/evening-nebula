exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    return arr.indexOf(item);
    // totally cheating
  },

  sum : function(arr) {
    var arrCopy = arr;
    var total = 0
    while (arrCopy.length > 0) {
      total = total + arrCopy.shift();
    };
    return total;
  },

  remove : function(arr, item) {
    var pos;
    while (arr.indexOf(item) != -1) {
      pos = arr.indexOf(item);
      arr.splice(pos, 1);
    };
    return arr;
  },

  reverseString : function(str) {
    // debugger;
    // var strCopy = str;
    // var stringArray = [];
    // var currentChar;
    // while (strCopy.length > 0) {
    //   currentChar = strCopy.slice(0,1);
    //   stringArray.unshift(currentChar);
    // };
    // var newStr = stringArray.join();
    // return newStr;
  },

  longestSubString : function(str) {

  },

  letterMoveForward : function(str) {

  },

  capitalizeWords : function(str) {

  }
};
