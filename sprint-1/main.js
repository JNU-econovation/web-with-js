const TimeConverter = require("./domain/time-converter.js");
const Time = require("./domain/Time.js");
const Log = require("./util/log.js");
const Logger = new Log();

function main() {
    const testcase = ["1600s m", "1h35m s", "3d h", "3837s h", "1400s", "1700H m"];

    testcase.forEach(tc => {
        try {
            let time = new Time(tc.split(" ")[0]);
            let TC = new TimeConverter(time.time, tc.split(" ")[1]);

            Log.log(TC.convertTime());
        } catch (err) {
            Log.err(err.message);
        }

    });
}

main();