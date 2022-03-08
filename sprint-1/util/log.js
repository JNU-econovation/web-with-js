class Log {
  printConvertResult(convertResultTimeList) {
    const [day, hour, min, sec] = convertResultTimeList;
    const dayString = day == 0 ? "" : day + "d";
    const hourString = hour == 0 ? "" : hour + "h";
    const minString = min == 0 ? "" : min + "m";
    const secString = sec == 0 ? "" : sec + "s";

    console.log("결과 :" + dayString + hourString + minString + secString);
  }
}

module.exports = Log;
