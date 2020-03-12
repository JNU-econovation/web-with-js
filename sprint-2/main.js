const Commander = require("./domain/commander");
const Log = require("./util/log");

function main() {
  let test1 = new Commander("count 1 2 3 4 5");
  Log.print(test1.spliter());
  let test2 = new Commander("add 35 23");
  Log.print(test2.spliter());
}
main();
