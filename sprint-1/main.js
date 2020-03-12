<<<<<<< HEAD
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

  let case1 = new TimeConverter(caseTime[0]).changeToS();
  new Log(converter(case1)).print();

  //   let case2 = new TimeConverter(caseTime[2]);
  //   new Log(case2.converter()).print();

  //   let case3 = new TimeConverter(caseTime[3]);
  //   new Log(case3.converter()).print();
=======
let TimeConverter = require("./domain/time-converter");
let Log = require("./util/log");

function main() {
  let iTime = ["1600s m", "1h35m s", "3d h", "3837s h", "1400s", "1700H m"];

  //에러 검사

  let case0 = new TimeConverter(iTime[0]);

  new Log(case0.converter()).printMS();

  let case1 = new TimeConverter(iTime[1]);
  new Log(case1.converter()).print();

  let case2 = new TimeConverter(iTime[2]);
  new Log(case2.converter()).printH();

  let case3 = new TimeConverter(iTime[3]);
  new Log(case3.converter()).printHMS();

  // let case4 = new TimeConverter(iTime[4]);
  // new Log(case4.converter()).print();

  // let case5 = new TimeConverter(iTime[5]);
  // new Log(case5.converter()).print();
>>>>>>> c53f376eda32a72c370268216e788297c832d110
}

main();
