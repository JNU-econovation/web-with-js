Array.prototype.customReduce = function(callback, initialValue) {
  array = Object(this);
  const length = array.length;

  let accumulator;
  if (initialValue!=undefined) accumulator = initialValue;
  else accumulator = parseInt(array[0]);

  for(let currentIndex=1;currentIndex<length;currentIndex++){
    currentValue = parseInt(array[currentIndex]);
    accumulator = callback(accumulator, currentValue, currentIndex, array);
  }
  return accumulator;
};

module.exports = Array;
