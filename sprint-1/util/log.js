// let TimeConverter = require("./domain/time-converter");

class Log {
  constructor(array) {
    this.d = array[0];
    this.h = array[1];
    this.m = array[2];
    this.s = array[3];
  }

  printMS() {
    console.log(this.m + "m" + this.s + "s");
  }
  print() {
    console.log(this.h + "h" + this.m + "m" + this.s + "s");
  }
  printH() {
    console.log(this.h + "h");
  }
  printHMS() {
    console.log(this.h + "h" + this.m + "m" + this.s + "s");
  }
}

module.exports = Log;
