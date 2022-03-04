const TimeConverter = require("./domain/time-converter.js");
const Log = require("./util/log");

function main() {
  new TimeConverter().convert("1600s h");
}

main();
