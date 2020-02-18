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
}

main();
