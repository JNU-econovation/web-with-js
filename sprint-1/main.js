const TimeConverter = require("./domain/time-converter.js");
const Time = require("./domain/Time.js");
const Log = require("./util/log.js");
const Logger = new Log();

function main() {
    let TC = [];
    // TC[1] = new TimeConverter("1600s m");
    // TC[2] = new TimeConverter("1h35m s");
    // TC[3] = new TimeConverter("3d h");
    // TC[4] = new TimeConverter("3837s h");
    // TC[5] = new TimeConverter("1400s");
    // TC[6] = new TimeConverter("1700H m");

    const testcase = ["1600s m", "1h35m s", "3d h", "3837s h", "1400s", "1700H m"];

    testcase.forEach(tc => {
        try {
            let time = new Time(tc.split(" ")[0]);
            let TC = new TimeConverter(time.time, tc.split(" ")[1]);

            Log.log(TC.convertTime());
        } catch (err) {
            Log.log(err.message);
        }

    });

    // 아래와 같은 형식으로 구현해보고 싶었으나 실패, 일단 err가 발생하면 그 다음 이터레이션으로 진행되지 않고, 
    // tc.convertTime()에서 return한 인자가 result에 들어갈 줄 알았는데 그렇지 않은 것 같음

    // TC.convertTime((err, result) => {
    //     if (err) Logger.log(err.message);
    //     else Logger.log(result);
    // })

}

main();