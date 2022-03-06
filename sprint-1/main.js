const TimeConverter = require("./domain/time-converter");
const Log = require("./util/log");
const inputList = [
  "1600s m",
  "1h35m s",
  "3d h",
  "3837s h",
  "1400s",
  "1700H m",
  "1 1",
  "123 s",
  "12h 2",
];

// 프로그램
for (let i = 0; i < inputList.length; i++) {
  console.log(i + 1 + "번째 입력 --------------");
  console.log("입력 :" + inputList[i]);
  const test = new TimeConverter(inputList[i]);

  if (test.isSuccessCommandParse()) {
    test.convertTimeToSec();
    let convertResultTimeList = test.convertTimeInSecUseBaseUnit();
    const timeLogger = new Log();
    timeLogger.printConvertResult(convertResultTimeList);
  }
}
