const array = require("./array");

const add_reducer = (acc, crr) => {
  crr = parseInt(crr);
  if (isNaN(crr))
    throw new Error("에러: 입력된 값이 숫자가 아닙니다.");
  return acc + crr;
}

const count_reducer = (acc) => { return acc + 1; }

const set_reducer = (acc, crr) => {
  if (!acc)
    acc = [];
  if (acc.length === 0 || acc[acc.length - 1] !== crr)
    acc.push(crr);
  return acc;
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
          result = this.input_array.customReduce(add_reducer);
          return callback(null, result);
        } catch (err) {
          return callback(err, null);
        }
      case 'count':
        result = this.input_array.customReduce(count_reducer);
        return callback(null, result);
      case 'set':
        result = this.input_array.sort().customReduce(set_reducer);
        return callback(null, result);
      default:
        return callback(new Error("에러: 잘못된 command입니다."), null);
    }
  }

}
module.exports = Commander;