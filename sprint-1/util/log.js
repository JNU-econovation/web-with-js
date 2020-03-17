const TimeConverter = require("../domain/time-converter");

class Log {
  constructor(result) {
    this.h = result["H"];
    this.m = result["M"];
    this.s = result["S"];
    console.log(result);
  }
  print() {
    console.log(this.h + "h" + this.m + "m" + this.s + "s");
    // if (this.h != 0) console.log(this.h + "h");
    // if (this.m != 0) console.log(this.m + "m");
    // if (this.s != 0) console.log(this.s + "s");
  }
}

module.exports = Log;
