const Parser = require("./parser");

const DAY_PER_SEC = 86400;
const HOUR_PER_SEC = 3600;
const MIN_PER_SEC = 60;
const PARSE_SUCCESS = true;
const PARSE_FAIL = false;

class TimeConverter {
  constructor(command) {
    this.command = command;
    this.commandParser = new Parser(command);
    this.baseUnit = "";
    this.convertTargetTime = "";
    this.timeInSec = 0;
  }

  // 파싱된 명령어를 받아옴.
  isSuccessCommandParse = () => {
    const parseList = this.commandParser.parseCommand();
    if (parseList === null) {
      return PARSE_FAIL;
    }
    [this.baseUnit, this.convertTargetTime] = parseList;
    return PARSE_SUCCESS;
  };

  // 파싱된 명령어 중 시간 부분을 일단 초 단위로 바꿈
  convertTimeToSec = () => {
    let numericStartIdx = 0;
    let numericString = "";
    let second = 0;

    for (let i = 0; i < this.convertTargetTime.length; i++) {
      switch (this.convertTargetTime[i]) {
        case "d":
          numericString = this.convertTargetTime.substring(numericStartIdx, i);
          numericStartIdx = i + 1;
          second += Number(numericString) * DAY_PER_SEC;
          break;
        case "h":
          numericString = this.convertTargetTime.substring(numericStartIdx, i);
          numericStartIdx = i + 1;
          second += Number(numericString) * HOUR_PER_SEC;
          break;
        case "m":
          numericString = this.convertTargetTime.substring(numericStartIdx, i);
          numericStartIdx = i + 1;
          second += Number(numericString) * MIN_PER_SEC;
          break;
        case "s":
          numericString = this.convertTargetTime.substring(numericStartIdx, i);
          numericStartIdx = i + 1;
          second += Number(numericString);
          break;
        default:
      }
    }
    this.timeInSec = second;
  };

  // 입력으로 주어진 단위에 따라 시간을 나눔.
  convertTimeInSecUseBaseUnit = () => {
    let leftOverSec = this.timeInSec;
    let resultDay = 0;
    let resultHour = 0;
    let resultMin = 0;
    let resultSec = 0;
    switch (this.baseUnit) {
      case "d":
        resultDay = parseInt(leftOverSec / DAY_PER_SEC);
        leftOverSec = leftOverSec % DAY_PER_SEC;
      case "h":
        resultHour = parseInt(leftOverSec / HOUR_PER_SEC);
        leftOverSec = leftOverSec % HOUR_PER_SEC;
      case "m":
        resultMin = parseInt(leftOverSec / MIN_PER_SEC);
        leftOverSec = leftOverSec % MIN_PER_SEC;
      default:
        resultSec = parseInt(leftOverSec);
    }

    return [resultDay, resultHour, resultMin, resultSec];
  };

  debugDescription = () => {
    console.log("");
    console.log("command :" + this.command);
    console.log("baseUnit :" + this.baseUnit);
    console.log("convertTargetTime :" + this.convertTargetTime);
    console.log("timeInSec :" + this.timeInSec);
  };
}

module.exports = TimeConverter;
