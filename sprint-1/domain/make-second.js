const DtoS = 86000;
const HtoS = 3600;
const MtoS = 60;
let totalSec = 0;

class MakeSecond {
  constructor(args) {
    this.caseTime = args.slice(0, -2); //시간
    this.caseUnit = args.slice(-1); //단위
  }
  changeToS() {
    let timeUnit = this.caseTime.slice(-1);
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
    return totalSec;
  }
}
module.exports = MakeSecond;
