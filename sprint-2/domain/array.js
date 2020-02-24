Array.prototype.customReduce = function (callback) {
  const src = Object(this);
  const length = src.length; // ||src.size 하면 객체나 Map도 사용할 수 있으려나? => 실험 안해봄
  let index = 0;
  let accumulator = 0;
  let currentValue;

  while (index < length) {
    console.log("currentValue:", currentValue);
    console.log("accumulator:", accumulator);
    console.log("index:", index);
    console.log("==============");

    currentValue = this[index++];
    accumulator = callback(accumulator, currentValue);
  }
  return accumulator;
};

const add = [0, 1, 2, 3, 4].customReduce(function (acc, crr) {
  return acc + crr;
}, 20);
console.log(add);

/*
아래 예시처럼 initialValue를 사용하도록 함수 reduce의 인자 형태를 바꾸는 법은?
함수 정의에서 parameter를 optional하게 설정하는 법 생각해보기.
initialValue가 있으면 accumulator를 initalValue로 초기화, 그렇지 않으면 배열의 첫번째 인자로 초기화하도록 */
const initialValue = 0;
const add2 = [{ x: 1 }, { x: 2 }, { x: 3 }].customReduce(function (acc, crr) {
  return acc + crr.x;
}, initialValue)
console.log(add2);

const count = [1, 2, 3, 4, 5, 6, 7, 8].customReduce(function (acc) {
  return acc + 1;
})
console.log(count);

const array = [1, 2, 3, 4, 5, 1, 4, 3, 2, 6, 5, 1, 7];
const set = array.sort().customReduce(function (acc, crr) {
  let newset = [];
  if (newset.length === 0 || newset[newset.length - 1] === crr)
    newset.push(crr);
  return newset;
})
console.log(set);

module.exports = Array;
