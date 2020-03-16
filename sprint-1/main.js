const TimeConverter = require('./domain/time-converter.js')
const Time = require('./domain/Time.js')
const Log = require("./util/log.js");

function main() {
    let TC = [];
    const ex = ["1600s m", "1h35m s", "3d h", "3837s h", "1400s", "1700H m"];

    ex.forEach(one => {
        try {
            let time = new Time(one.split(" ")[0]);
                TC = new TimeConverter(time.time, one.split(" ")[1]);
            Log.display(TC.convertTime());
        } catch (err) {
            Log.display(err.message);
        }
    });
}
main();










//실제 출력이 진행되는 곳