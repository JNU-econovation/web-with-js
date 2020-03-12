<<<<<<< HEAD
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
=======
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
>>>>>>> c53f376eda32a72c370268216e788297c832d110
  }
}

module.exports = Log;
