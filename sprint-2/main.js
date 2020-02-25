const Commander = require("./domain/commander.js");
const Log = require("./util/log.js");

function test(params){
    let domain = new Commander(params);
    let util = new Log(domain.command, domain.set());
    util.print();
}

function main() {
    test("count 1 2");
    test("count 1 2 3 4 5");
    test("count 1 5 2 1 3 4 5");

    test("add 4 12")
    test("add 35 23 12")
    test("add 12 57 35 24 23 12")
}
main();
