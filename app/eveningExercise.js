exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    // return arr.indexOf(item);
    // totally cheating

    // let's try this without cheating
    var i = 0
    while (i < arr.length) {
      i++;
      //check each spot in the array for the item
      if (arr[i] === item) {
        return i;
      };
    };
    // item was not found
    return -1;
  },

  sum : function(arr) {
    var arrCopy = arr;
    var total = 0;
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
    var strArr = str.split('');
    var reverseArr = [];
    var currentChar = '';
    while (strArr.length > 0){
      currentChar = strArr.pop();
      reverseArr.push(currentChar);
    };
    var newStr = reverseArr.join('');
    return newStr;
  },

  longestSubString : function(str) {
    var subStringArray = str.split(" ");
    subStringArray.sort(function(a, b){
      return a.length - b.length;
    });
    var longest = subStringArray.pop();
    return longest;
  },

  letterMoveForward : function(str) {
    var newStr = str.replace(/[a-zA-Z]/g, function(char) {
      switch (char) {
        case 'z': return 'a';
        case 'Z': return 'A';
        default: return String.fromCharCode(char.charCodeAt(0)+1)
      };
    });
    return newStr;
  },

  capitalizeWords : function(str) {
    return str.replace(/(?:^|\s)\S/g, function(char) {
      return char.toUpperCase();
    });
  }
};
