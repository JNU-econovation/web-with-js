const add = (acc, crr) => {
  crr = parseInt(crr);
  if (isNaN(crr)) throw new Error("에러: 입력된 값이 숫자가 아닙니다");
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

  run() {
    switch (this.command) {
      case 'add':
        return this.input_array.customReduce(add); break;
      case 'count':
        return this.input_array.customReduce(count); break;
      case 'set':
        return this.input_array.sort().customReduce(set);
        newset = [];
      default:
        throw new Error("에러: 잘못된 command입니다.");
    }
  }

}
module.exports = Commander;