Array.prototype.customReduce = function (callback, initialValue) {
  const src = Object(this);
  const length = src.length;
  let index = 0;
  let accumulator = 0;
  let currentValue;

  if (initialValue) accumulator = initialValue;
  if (!initialValue && length === 0) throw new Error("에러: reduce할 값이 없습니다.");

  while (index < length) {
    currentValue = this[index++];
    accumulator = callback(accumulator, currentValue);
  }
  return accumulator;
};

module.exports = Array;
