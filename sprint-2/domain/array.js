Array.prototype.customReduce = function (callback, initialValue) {
  const src = Object(this);
  const length = src.length;
  let index = 0;
  let accumulator = 0;
  let currentValue;

  /*
    실제 자바스크립트 표준객체 Array의 reduce에 대한 설명을 참고했을 때 initialValue가 있으면
    그 initialValue 위에 reduce를 해나가고(accumulator = initialValue), 
    initialValue가 없으면 acculator가 0으로 초기화된 상태 그대로 그 위에 reduce를 합니다.
  */


  if (initialValue) accumulator = initialValue; // initialValue가 unidentified, null, false인 경우는 지나침

  if (!initialValue && length === 0)
    throw new Error("에러: reduce할 값이 없습니다");

  while (index < length) {
    currentValue = this[index++];

    try {
      accumulator = callback(accumulator, currentValue);
    } catch (err) {
      // console.log("array.js에서 인쇄하는 에러메세지:", err.message);
      throw err;
      // continue;
    }
  }
  return accumulator;
};

module.exports = Array;
