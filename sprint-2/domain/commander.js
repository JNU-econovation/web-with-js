// const array = require("./array.js");
class Commander {
  constructor(params) {
    this.input = params;
    this.object = {};
  }
  spliter() {
    let str = this.input;
    let splitstr = str.split(" ");
    this.object.order = splitstr[0];
    this.object.vals = new Array();
    for (let i = 1; i < splitstr.length; i++) {
      this.object.vals[i - 1] = splitstr[i];
    }
    return this.object;
  }
}
const add = function(acc, cur) {
  return acc + cur;
};
const sum = function() {
  return this.object.vals.customReduce(add);
};

module.exports = Commander;
