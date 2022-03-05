const Time = require("./time.js");

const { parseToTime } = require("./time-parser.js");
const { DAY_TO, HOUR_TO, MIN_TO } = require("../constants.js");

class TimeConverter {
  constructor() {
    this.convertedTime;
  }

  convert(command) {
    const [timeString, unit] = command.split(" ");
    const baseTime = new Time(parseToTime(timeString));
    baseTime.adjustAllUnit();

    console.log(baseTime);
    if (unit === "d") {
      this.convertToDay(baseTime);
    } else if (unit === "h") {
      this.convertToHour(baseTime);
    } else if (unit === "m") {
      this.convertToMinute(baseTime);
    } else if (unit === "s") {
      this.convertToSecond(baseTime);
    }
  }

  convertToSecond({ day, hour, minute, second }) {
    const convertedSecond =
      day * DAY_TO.SEC + hour * HOUR_TO.SEC + minute * MIN_TO.SEC + second;

    this.convertedTime = new Time({
      day: 0,
      hour: 0,
      minute: 0,
      second: convertedSecond,
    });
  }

  convertToMinute({ day, hour, minute, second }) {
    const convertedMinute = day * DAY_TO.MIN + hour * HOUR_TO.MIN + minute;

    this.convertedTime = new Time({
      day: 0,
      hour: 0,
      minute: convertedMinute,
      second: second,
    });
  }

  convertToHour({ day, hour, minute, second }) {
    const convertedHour = day * DAY_TO.HOUR + hour;

    this.convertedTime = new Time({
      day: 0,
      hour: convertedHour,
      minute: minute,
      second: second,
    });
  }

  convertToDay(baseTime = { day, hour, minute, second }) {
    this.convertedTime = new Time(baseTime);
  }
}

module.exports = TimeConverter;
