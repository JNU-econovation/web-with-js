const add = (acc, crr, callback) => {
  crr = parseInt(crr);
  if (isNaN(crr)) return callback(new Error("에러: 입력된 값이 숫자가 아닙니다"), null); // *이부분 콜백처리하는 법을 모르겠습니다!
  return acc + crr;
}
const count = (acc) => { return acc + 1; }
let newset = [];
const set = (acc, crr) => {
  if (newset.length === 0 || newset[newset.length - 1] !== crr)
    newset.push(crr);
  return newset;
}

class Commander {
  constructor(command, input_array) { // input params로 command, (custom된)array객체 들어옴
    this.command = command;
    this.input_array = input_array;
  }

  run(callback) {
    let result;
    switch (this.command) {
      case 'add':
        result = this.input_array.customReduce(add);
        return callback(null, result);
      case 'count':
        result = this.input_array.customReduce(count);
        return callback(null, result);
      case 'set':
        result = this.input_array.sort().customReduce(set);
        return callback(null, result);
        newset = [];
      default:
        return callback(new Error("에러: 잘못된 command입니다."), null);
    }
  }

}
module.exports = Commander;