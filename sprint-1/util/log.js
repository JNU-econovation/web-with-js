const { FORMAT_OF } = require("../constants.js");

class Log {
  constructor() {}

  err(error) {
    console.log(`${error.name}: ${error.message}`);
  }

  time(time = { day, hour, minute, second }) {
    let message = "";
    if (time.day !== 0) message += time.day + FORMAT_OF.day;
    if (time.hour !== 0) message += time.hour + FORMAT_OF.hour;
    if (time.minute !== 0) message += time.minute + FORMAT_OF.minute;
    if (time.second !== 0) message += time.second + FORMAT_OF.second;
    console.log(message);
  }
}

module.exports = Log;
