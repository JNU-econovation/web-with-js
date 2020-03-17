// const TimeConverter = require("./make-second");
const DtoS = 86000;
const HtoS = 3600;
const MtoS = 60;
let totalSec = 0;

class TimeConverter {
  constructor(args) {
    this.caseTime = args.slice(0, -2); //시간
    this.caseUnit = args.slice(-1); //단위
    this.timeUnit = this.caseTime.slice(-1);
  }
  changeToS() {
    // let timeUnit = this.caseTime.slice(-1);
    let time = parseInt(this.caseTime);
    if (timeUnit == "m") {
      totalSec += time * MtoS;
    }
    if (timeUnit == "h") {
      totalSec += time * HtoS;
    }
    if (timeUnit == "d") {
      totalSec += time = DtoS;
    }
    console.log(totalSec);
    return totalSec;
  }
  converter() {
    let totalSec = this.changeToS();
    const result = {
      H: 0,
      M: 0,
      S: 0
    };
    if (this.caseUnit == "s") {
      result["S"] = totalSec;
    }
    if (this.caseUnit == "m") {
      result["M"] = parseInt(totalSec / 60);
      result["S"] = parseInt(totalSec % 60);
    }
    if (this.caseUnit == "h") {
      result["H"] = totalSec / 3600;
      result["M"] = (totalSec % 3600) / 60;
      result["S"] = (totalSec % 3600) % 60;
    }
    console.log("convert : " + result["H"] + result["M"] + result["S"]);
    return result;
  }
}

module.exports = TimeConverter;
