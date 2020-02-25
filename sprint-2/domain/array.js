Array.prototype.customReduce = function(callback) {
  const array = Object(this);
  const length = array.length;
  let sum=0;
  let value;
  for(let i=0;i<length;i++){
    value = parseInt(array[i]);
    sum = callback(sum, value);
  }
  return sum;
};

module.exports = Array;
