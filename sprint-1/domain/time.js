const { DIGIT } = require("../constants.js");

class Time {
  static units = ["d", "h", "m", "s"];

  constructor({ day = 0, hour = 0, minute = 0, second = 0 }) {
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  adjustAllUnit() {
    this.adjustSecond();
    this.adjustMinute();
    this.adjustHour();
  }

  adjustSecond() {
    if (this.second < DIGIT.SEC) {
      return;
    }

    const curSecond = this.second;
    this.second = curSecond % DIGIT.SEC;
    this.minute = Math.floor(curSecond / DIGIT.SEC);
  }

  adjustMinute() {
    if (this.minute < DIGIT.MIN) {
      return;
    }

    const curMinute = this.minute;
    this.minute = curMinute % DIGIT.MIN;
    this.hour = Math.floor(curMinute / DIGIT.MIN);
  }

  adjustHour() {
    if (this.hour < DIGIT.HOUR) {
      return;
    }

    const curHour = this.hour;
    this.hour = curHour % DIGIT.HOUR;
    this.day += Math.floor(curHour / DIGIT.HOUR);
  }
}

module.exports = Time;
