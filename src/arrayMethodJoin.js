'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let newString = '';

    for (const element in this) {
      if (this[element] === null || this[element] === undefined) {
        this[element] = '';
      }
    }

    if (separator === undefined) {
      for (let i = 0; i < this.length - 1; i++) {
        newString += this[i];
        newString += ',';
      }
    }

    if (this.length === 0) {
      return newString;
    }

    for (let i = 0; i < this.length - 1; i++) {
      newString += this[i];
      newString += separator;
    }

    for (let i = this.length - 1; i < this.length; i++) {
      newString += this[i];
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
