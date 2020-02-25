const array = require("./array.js");
class Commander {
  constructor(params) {
    this.command = params.split(' ')[0];
    this.array = params.split(' ').slice(1);
  }
  count(arr){
    const sum = arr.customReduce((acc) => acc + 1,0);
    return sum;
  }
  add(arr){
    const sum = arr.customReduce((acc, cur) => acc + cur);
    return sum;
  }
  set(){
    if(this.command=='count') return this.count(this.array);
    else if(this.command='add') return this.add(this.array);
    else;
  }
}
module.exports = Commander;
