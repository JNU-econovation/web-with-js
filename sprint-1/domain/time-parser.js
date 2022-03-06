const { TIME_FORMAT, FORMAT_OF } = require("../constants.js");

const parseToTime = (expression) => {
  let value = "";
  const time = { day: 0, hour: 0, minute: 0, second: 0 };

  for (let str of expression) {
    if (!TIME_FORMAT.includes(str)) {
      value += str;
      continue;
    }

    if (str === FORMAT_OF.day) {
      time.day += Number(value);
    } else if (str === FORMAT_OF.hour) {
      time.hour += Number(value);
    } else if (str === FORMAT_OF.minute) {
      time.minute += Number(value);
    } else if (str === FORMAT_OF.second) {
      time.second += Number(value);
    }
    value = "";
  }

  return time;
};

module.exports = { parseToTime };
