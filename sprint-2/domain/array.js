// const array = require("./array.js");
// const Commander = require("./commander");

Array.prototype.customReduce = function(callback) {
  const array = vals;
  const length = array.length;
  let index = 0;
  while (index < length) {
    index++;
    callback(array);
  }
  //리턴이 있어야함
};

module.exports = Array;
