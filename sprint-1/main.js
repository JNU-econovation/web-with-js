function main() {
    const TimeConverter = require('./domain/time-converter.js');
    const Log = require('./util/log.js');

    let test = new TimeConverter("3837s h");
    test.isType();
    test.cvt();
    let util = new Log(test.n_data);

    util.printData();
}

main();
