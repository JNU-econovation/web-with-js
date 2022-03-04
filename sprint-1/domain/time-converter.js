const Time = require("./time.js");

class TimeConverter {
  constructor() {}

  convert(command) {
    let [timeExpression, unit] = command.split(" ");
    const time = new Time(timeExpression);
    // console.log(time);
  }
}

module.exports = TimeConverter;
