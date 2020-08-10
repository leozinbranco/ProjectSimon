'use strict'

module.exports = {
  /**
   * Function to split an string to array based on a separator. 
   * 
   * @param {String} arrayAsString String to be converted to array
   * @param {String} separator Separator to split string
   * 
   * @returns {Array}
   */
  stringToArray(arrayAsString, separator = ",") {
    return arrayAsString
      .split(separator)
      .map(auth => auth.trim());
  }
}
