const { DIGIT } = require("../constants.js");

class Time {
  static units = ["d", "h", "m", "s"];

  constructor(time) {
    this.day = 0;
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.preprocessing(time);
    this.adjustSecond();
    this.adjustMinute();
    this.adjustHour();
  }

  preprocessing(time) {
    let tmp = "";

    for (let i of time) {
      if (!Time.units.includes(i)) {
        tmp += i;
        continue;
      }

      if (i === "d") {
        this.day += Number(tmp);
      } else if (i === "h") {
        this.hour += Number(tmp);
      } else if (i === "m") {
        this.minute += Number(tmp);
      } else if (i === "s") {
        this.second += Number(tmp);
      }
      tmp = "";
    }
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
    this.day = Math.floor(curHour / DIGIT.HOUR);
  }
}

module.exports = Time;
