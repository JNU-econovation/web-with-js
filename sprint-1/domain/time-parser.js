const { TIME_FORMAT } = require("../constants.js");

const parseToTime = (expression) => {
  let value = "";
  const time = { day: 0, hour: 0, minute: 0, second: 0 };

  for (let str of expression) {
    if (!TIME_FORMAT.includes(str)) {
      value += str;
      continue;
    }

    if (str === "d") {
      time.day += Number(value);
    } else if (str === "h") {
      time.hour += Number(value);
    } else if (str === "m") {
      time.minute += Number(value);
    } else if (str === "s") {
      time.second += Number(value);
    }
    value = "";
  }

  return time;
};

module.exports = { parseToTime };
