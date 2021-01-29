const TimeConverter = require("./domain/time-converter");
const Log = require("./util/log");

function main() {
  let caseTime = ["1600s m", "1h35m s", "3d h", "3837s h", "1400s", "1700H m"];

  //   let case0 = new TimeConverter(caseTime[0]);
  //에러 검사 아직 안함
  //   caseTime.forEach (ct => {
  //     let total = new TimeConverter(ct.changeToS());

  //   })
  //   let case0 = new TimeConverter(caseTime[0]);
  //   let result0 = new Log(converter(case0.changeToS()));
  //   result0.print();
  //   new Log(case0.changeToS().converter()).print();

  let case1 = new TimeConverter(caseTime[0]);
  new Log(case1
    .converter()).print();

  //   let case2 = new TimeConverter(caseTime[2]);
  //   new Log(case2.converter()).print();

  //   let case3 = new TimeConverter(caseTime[3]);
  //   new Log(case3.converter()).print();
}

main();
