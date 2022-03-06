const TimeConverter = require("./domain/time-converter.js");
const Log = require("./util/log.js");

function main() {
  const log = new Log();
  const timeConverter = new TimeConverter();
  const testCase = [
    "1600s m",
    "1h35m s",
    "3d h",
    "3837s h",
    "1400s",
    "1700H m",
  ];

  for (const tc of testCase) {
    const error = timeConverter.convert(tc);

    if (error) {
      log.err(error);
    } else {
      console.log(timeConverter.convertedTime);
    }
  }
}

main();
