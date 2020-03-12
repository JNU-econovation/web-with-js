const Commander = require("../domain/commander");
const array = require("../domain/array.js");

class Log {
  static print(obj) {
    //static -> 객체 생성없이도 바로 사용가능
    if (obj.order == "count") {
      console.log("count: " + obj.vals.length);
    }
    if (obj.order == "add") {
      console.log("add: " + sum);
    }
  }
}

module.exports = Log;
