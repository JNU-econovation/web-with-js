const array = require("./array");

const add = (acc, crr) => {
  crr = parseInt(crr);
  if (isNaN(crr))
    throw new Error("에러: 입력된 값이 숫자가 아닙니다.");
  return acc + crr;
}

const count = (acc) => { return acc + 1; }

let newset;
const set = (acc, crr) => {
  if (newset.length === 0 || newset[newset.length - 1] !== crr)
    newset.push(crr);
  return newset;
}

class Commander {

  constructor(command, ...rest) {
    this.command = command;
    this.input_array = new array(...rest);
  }

  run(callback) {
    let err, result;
    switch (this.command) {
      case 'add':
        try {
          result = this.input_array.customReduce(add);
          return callback(null, result);
        } catch (err) {
          return callback(err, null);
        }

      case 'count':
        result = this.input_array.customReduce(count);
        return callback(null, result);
      case 'set':
        newset = [];
        result = this.input_array.sort().customReduce(set);
        return callback(null, result);
      default:
        return callback(new Error("에러: 잘못된 command입니다."), null);
    }
  }

}
module.exports = Commander;