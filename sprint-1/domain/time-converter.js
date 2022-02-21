const DayPerSec = 86400;
const HourPerSec = 3600;
const MinPerSec = 60;
const Parser = require("./parser");
const PARSE_SUCCESS = true;
const PARSE_FAIL = false;
class TimeConverter {
  constructor(command) {
    this.command = command;
    this.commandParser = new Parser(command);
    this.baseUnit = "";
    this.convertTargetTime = "";
    this.timeInSec = 0;
    this.resultDay = 0;
    this.resultHour = 0;
    this.resultMin = 0;
    this.resultSec = 0;
  }

  setUpCommandParser = () => {
    const parseList = this.commandParser.parseCommand();
    if (parseList === null) {
      return PARSE_FAIL;
    }
    [this.baseUnit, this.convertTargetTime] = parseList;
    return PARSE_SUCCESS;
  };

  convertTimeToSec = () => {
    let numericStart = 0;
    let numericString = "";
    let second = 0;
    for (let i = 0; i < this.convertTargetTime.length; i++) {
      switch (this.convertTargetTime[i]) {
        case "d":
          numericString = this.convertTargetTime.substring(numericStart, i);
          numericStart = i + 1;
          second += Number(numericString) * DayPerSec;
          break;
        case "h":
          numericString = this.convertTargetTime.substring(numericStart, i);
          numericStart = i + 1;
          second += Number(numericString) * HourPerSec;
          break;
        case "m":
          numericString = this.convertTargetTime.substring(numericStart, i);
          numericStart = i + 1;
          second += Number(numericString) * MinPerSec;
          break;
        case "s":
          numericString = this.convertTargetTime.substring(numericStart, i);
          numericStart = i + 1;
          second += Number(numericString);
          break;
        default:
      }
    }
    this.timeInSec = second;
  };

  convertTimeInSecUseBaseUnit = () => {
    let leftOverSec = this.timeInSec;

    switch (this.baseUnit) {
      case "d":
        this.resultDay = parseInt(leftOverSec / DayPerSec);
        leftOverSec = leftOverSec % DayPerSec;
      case "h":
        this.resultHour = parseInt(leftOverSec / HourPerSec);
        leftOverSec = leftOverSec % HourPerSec;
      case "m":
        this.resultMin = parseInt(leftOverSec / MinPerSec);
        leftOverSec = leftOverSec % MinPerSec;
      default:
        this.resultSec = parseInt(leftOverSec);
    }

    return [this.resultDay, this.resultHour, this.resultMin, this.resultSec];
  };

  debugDescription = () => {
    console.log("");
    console.log("command :" + this.command);
    console.log("baseUnit :" + this.baseUnit);
    console.log("convertTargetTime :" + this.convertTargetTime);
    console.log("timeInSec :" + this.timeInSec);
    console.log("resultDay:" + this.resultDay);
    console.log("resultHour:" + this.resultHour);
    console.log("resultMin:" + this.resultMin);
    console.log("resultSec:" + this.resultSec);
  };
}

module.exports = TimeConverter;
