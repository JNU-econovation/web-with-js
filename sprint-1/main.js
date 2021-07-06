const TimeConverter = require("./domain/time-converter.js");
const Time = require("./domain/Time.js");
const Log = require("./util/log.js");
const Logger = new Log();

function main() {
    const testcase = ["1600s m", "1h35m s", "3d h", "3837s h", "1400s", "1700H m"];

    testcase.forEach(tc => {
        try {
            const time = new Time(tc.split(" ")[0]);
            const TC = new TimeConverter(time, tc.split(" ")[1]);
            const converted_time = TC.convertTime();
            Log.timelog(converted_time);
        } catch (err) {
            Log.err(err.message);
        }

    });
}

main();