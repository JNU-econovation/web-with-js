const TimeConverter = require("./domain/time-converter.js");
const Log = require("./util/log.js");

// 입출력 예제를 참고하여 바꾸셔도 됩니다.
const input = "1600s m";
const [beforeConvert, afterConvertUnit] = input.split(" ");

timeConverter = new TimeConverter(beforeConvert);
log = new Log(timeConverter.converter(), afterConvertUnit);

log.print();
