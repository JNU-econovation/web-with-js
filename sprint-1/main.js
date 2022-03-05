const TimeConverter = require("./domain/time-converter.js");
const Log = require("./util/log");

function main() {
  const timeConverter = new TimeConverter();
  const testCase = ["1600s m", "1h35m s", "3d h", "3837s h"];
  for (let tc of testCase) {
    timeConverter.convert(tc);
    console.log(timeConverter.convertedTime);
  }
}

main();
